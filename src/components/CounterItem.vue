<template>
    <div>
        Counter from data/method: {{counter}}
        <button type="button" @click="counterPlus">Plus for data/method</button>
        <hr>
        Counter from var: {{counterVar}}
        <button type="button" @click="counterPlusForVar">Plus for var</button>
        <hr>
        Width: {{cubeReactive.width}}
        height: {{cubeReactiveRef.height}}
        length: {{cubeNotReactive.length}}
        <button type="button" @click="changeCubeData">Change Cube Data</button>
        <hr>
        <textarea
         v-text="modelValue"
         @keyup="update"></textarea>
    </div>

</template>

<script>
import { ref, reactive, toRefs } from 'vue'
export default {
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    counterPlus () {
      this.counter++
    }
  }
}

</script>

<script setup>
const counterVar = ref(0)
function counterPlusForVar () {
  counterVar.value++
}

const cubeReactive = reactive({
  width: 10,
  height: 20,
  length: 30
})

const cubeNotReactive = {
  width: 10,
  height: 20,
  length: 30
}

const cubeReactiveRef = toRefs(cubeReactive)

function changeCubeData () {
  console.log(cubeReactiveRef)
  cubeReactiveRef.width.value = cubeReactive.width * 10
  cubeReactiveRef.height.value = cubeNotReactive.height * 20
  cubeReactiveRef.length.value = cubeReactive.length * 30
}

defineProps({
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])

function update (e) {
  emit('update:modelValue', e.target.value)
}
</script>

<template>
    <div>
      <transition name="fade">
        <div v-show="isShow">Hello world</div>
      </transition>

      <button type="button" @click="isShow = !isShow">Toogle</button>

      <hr>
      <div v-if="arr.length">
      <transition-group tag="ul" name="list">
        <li v-for="(item, index) in arr" @click="removeItem(index)">
            <p>{{ index }} : {{ item }}</p>
        </li>
      </transition-group>
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const isShow = ref(false)

let arr = ref(['first', 'second', 'third'])

const removeItem = (index) => {
    arr.value = arr.value.filter((el, i) => i !== index)
}
</script>

<style scoped>

.fade-leave-from {
  opacity: 1
}
.fade-leave-to {
  opacity: 0
}
.fade-leave-active,
.fade-enter-active {
  transition: all 2s ease
}

.fade-enter-from {
  opacity: 0
}
.fade-enter-to {
  opacity: 1
}

.list-leave-from {
  opacity: 1;
  transform: scale(1)
}
.list-leave-to {
  opacity: 0;
  transform: scale(0.6)
}
.list-leave-active,
.list-enter-active {
  transition: all 2s ease
}

.list-enter-from {
  opacity: 0;
  transform: scale(0.6)
}
.list-enter-to {
  opacity: 1;
  transform: scale(1)
}
</style>
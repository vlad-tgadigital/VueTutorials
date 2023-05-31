<template>
    <div>
        <input type="number" v-model="noteCount">
        <button type="button" @click="callApi">Call API</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      noteCount: 1
    }
  },
  mounted () {
    var note = {
      id: Date.now(), title: 'I am default item drom mounted!', completed: false
    }
    this.$emit('changeTodoList', note)
  },
  methods: {
    callApi () {
      var that = this
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => this.$emit('addDataFromApiCall', { noteCount: that.noteCount, data: json }))
    }
  }
}
</script>

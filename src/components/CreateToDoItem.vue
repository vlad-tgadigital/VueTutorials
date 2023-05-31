<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="title">
        <button type="submit" @click.prevent="onSubmit">Create</button>
    </form>
</template>

<script>
export default {
  props: ['todos'],
  data () {
    return {
      title: ''
    }
  },
  methods: {
    onSubmit () {
      var note = {
        id: Date.now(), title: this.title, completed: false
      }
      this.$emit('changeTodoList', note)
    }
  }
}
</script>

<style scoped>
form {
    display: flex;
}

input {
    width: 400px;
}
</style>

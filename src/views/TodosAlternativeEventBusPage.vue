<template>
    <div>
        <a href="/">Home</a>
        <hr>
      <h2>Todo <b>ALTERNATIVE</b> application</h2>
      <hr>
      <TodoListAlternativeEventBus :todos="todos"/>
    </div>
  </template>

<script>
import TodoListAlternativeEventBus from '@/components/TodoListAlternativeEventBus.vue'

export default {
  name: 'Alternative Todos',
  data () {
    return {
      todos: [
        { id: 111111, title: 'Buy bread', completed: false },
        { id: 222222, title: 'Buy bear', completed: false },
        { id: 333333, title: 'Buy water', completed: false }
      ]
    }
  },
  components: {
    TodoListAlternativeEventBus,
  },
  mounted() {
    this.emitter.on('remove-todo', (id) => this.removeTodo(id))
  },
  methods: {
    removeTodo (id) {
      this.todos = this.todos.filter(t => t.id !== id)
    }
  },
  beforeDestroy() {
    this.emitter.all.clear()
  }
}
</script>

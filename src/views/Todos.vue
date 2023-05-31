<template>
    <div>
        <a href="/">Home</a>
        <hr>
      <h2>Todo application</h2>
      <CreateToDoItem
      @changeTodoList="$event=> { todos.push($event)}"/>
      <SimulateApiCall
      @changeTodoList="$event=> { todos.push($event)}"
      @addDataFromApiCall="addDataFromApiCall"/>
      <hr>
      <TodoList :todos="todos"
      @remove-todo="removeTodo"/>
    </div>
  </template>

<script>

import TodoList from '@/components/TodoList.vue'
import CreateToDoItem from '@/components/CreateToDoItem.vue'
import SimulateApiCall from '@/components/SimulateApiCall.vue'
export default {
  name: 'App',
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
    TodoList,
    CreateToDoItem,
    SimulateApiCall
  },
  methods: {
    removeTodo (id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },
    addDataFromApiCall ({ noteCount, data }) {
      const result = data.slice(0, noteCount)
      this.todos = result.concat(this.todos)
      console.log(this.todos)
    }
  }
}
</script>

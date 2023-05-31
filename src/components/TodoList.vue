<template>
    <div>
      <transition-group tag="ul" name="list">
            <TodoItem
            v-for="(todo, index) in todos"
            :key="todo.id"
            :todo="todo"
            :index="index"
            @remove-todo="removeTodo"/>
          </transition-group>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  props: ['todos'],
  components: {
    TodoItem
  },
  methods: {
    removeTodo (id) {
      this.$emit('remove-todo', id)
    }
  }
}

</script>

<style scoped>
ul{
    list-style: none;
    margin: 0;
    padding: 0;
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
  transition: all 1s ease
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

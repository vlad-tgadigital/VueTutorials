<template>
    <div>
      <transition-group tag="ul" name="list">
            <TodoItemAlternativeEventBus
            v-for="(todo, index) in todos"
            :key="todo.id"
            :todo="todo"
            :index="index"/>
          </transition-group>
    </div>
</template>

<script>
import TodoItemAlternativeEventBus from './TodoItemAlternativeEventBus.vue'

export default {
  props: ['todos'],
  components: {
    TodoItemAlternativeEventBus
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

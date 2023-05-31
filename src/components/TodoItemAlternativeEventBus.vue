<template>
    <li>
        <span :class="{done: todoLocal.completed}">
            <input type="checkbox"
                @change="todoLocal.completed = !todoLocal.completed">
            <strong>{{index}}</strong>
            {{todoLocal.title}}
        </span>
        <button class="btn-remove" @click="removeTodo(todoLocal.id)">&times;</button>
    </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: Number
  },
  data () {
    return {
      todoLocal: this.todo
    }
  },
  methods: {
    removeTodo(id) {
        this.emitter.emit('remove-todo', id)
    }
  }
}

</script>

<style scoped>
li{
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: .5em 2rem;
    margin-bottom: 1rem;
}
.btn-remove{
    background: red;
    color:#fff;
    border-radius: 50%;
    font-weight: bold;
}

.done{
    text-decoration: line-through;
}

input{
    margin-right: 1rem;
}
</style>

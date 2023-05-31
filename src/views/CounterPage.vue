<template>
    <div>
        <router-link to="/">Home</router-link>
        <hr>
        I am from parent (ContentPagere): {{ comment }}
        <hr>
       <CounterItem v-model="comment" />
    </div>
</template>

<script>
import CounterItem from '@/components/CounterItem.vue'
import { ref } from 'vue'
export default {
  components: {
    CounterItem
  }
}
</script>

<script setup>
const comment = ref('my comment text!')
</script>

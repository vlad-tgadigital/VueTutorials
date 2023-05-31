<template>
    <div>
        <router-link to="/">Home</router-link>
        <hr>
        <ModalWindow />
    </div>
</template>

<script>
import ModalWindow from '@/components/ModalWindow.vue'

export default {
  components: {
    ModalWindow
  }
}
</script>

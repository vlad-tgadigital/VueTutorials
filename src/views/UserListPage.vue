<template>
    <div>
        <router-link to="/">Home</router-link>
        <hr>
        <UserList />
    </div>
</template>

<script>
import UserList from '@/components/UserList.vue';
export default {
  components: {
    UserList
}
}
</script>

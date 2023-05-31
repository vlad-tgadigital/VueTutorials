<template>
    <div>
        <router-link to="/">Home</router-link>
        <hr>
        <SubmitForm 
        @custom-submit="customSubmit"
        :submitted="submitted"/>

        <Suspense>
            <UserList
            v-if="submitted"/>
        </Suspense>
    </div>
</template>

<script>
import { ref } from 'vue'
import SubmitForm from '@/components/SubmitForm.vue'
import UserList from '@/components/UserList.vue'

export default {
  data () {
    let submitted = ref(false)

    return { submitted: submitted }
  },
  methods: {
    customSubmit (value) {
    this.submitted = value
    }
  },
  components: {
    SubmitForm,
    UserList
  }
}
</script>

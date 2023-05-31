<template>
    <router-link to="/">Home</router-link>
    <hr>
    <SlotItem>Firs card</SlotItem>
    <SlotItem>Second Card</SlotItem>
    <SlotItem><img src="https://picsum.photos/200"></SlotItem>

    <SlotItem>
        <template v-slot:customSlotName>
            <h2>I am from Slot page and I was called by custom Slot Name</h2>
        </template>
    </SlotItem>
</template>

<script>
import SlotItem from '@/components/SlotItem.vue'

export default {
  components: {
    SlotItem
}
}
</script>
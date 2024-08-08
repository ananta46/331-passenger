<script setup lang="ts">
import { toRefs, defineProps } from 'vue'
import { type Passenger } from '@/types'
import { useMessageStore } from '@/stores/message'
import router from '@/router'
const store = useMessageStore()
const props = defineProps<{
  passenger: Passenger
  id: String
}>()
const { passenger } = toRefs(props)
const edit = () => {
  store.updateMessage('you are successfully edit passenger')

  setTimeout(() => {
    store.resetMessage()
  }, 3000)
  router.push({ name: 'passenger-list-view', params: { id: props.passenger._id } })
}
</script>

<template>
  <p>Id: {{ passenger._id }}</p>
  <p>Name: {{ passenger.name }}</p>
  <p>Trips: {{ passenger.trips }}</p>
  <button @click="edit">Edit</button>
</template>

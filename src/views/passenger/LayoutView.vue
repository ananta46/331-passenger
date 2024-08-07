<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { type Passenger } from '@/types'
import PassengerService from '@/services/PassengerService'
const router = useRouter()
const passenger = ref<Passenger | null>(null)
const props = defineProps({
  id: {
    type: String,
    require: true
  }
})
onMounted(() => {
  PassengerService.getPassenger(props.id)
    .then((response) => {
      passenger.value = response.data
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        router.push({
          name: '404-resource-view',
          params: { resource: 'event' }
        })
      } else {
        router.push({ name: 'network-error-view' })
      }
    })
})
</script>

<template>
  <div v-if="passenger">
    <h1>{{ passenger.name }}</h1>
    <nav>
      <RouterLink :to="{ name: 'passenger-detail-view' }">Details</RouterLink>|
      <RouterLink :to="{ name: 'airline-view' }">Airline</RouterLink>|
    </nav>
    <RouterView :passenger="passenger" />
  </div>
</template>

<script setup lang="ts">
import { type Passenger } from '@/types'
import { usePassengerStore } from '@/stores/passenger'
import { storeToRefs } from 'pinia'
const store = usePassengerStore()
const { passenger } = storeToRefs(store)
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

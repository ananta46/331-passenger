<script setup lang="ts">
import { toRefs, defineProps } from 'vue'
import { type Passenger } from '@/types'

const props = defineProps<{
  passenger: Passenger
  id: String
}>()
const { passenger } = toRefs(props)
</script>

<template>
  <div v-for="(airline, index) in passenger.airline" :key="index">
    <p>Airline Id: {{ airline._id }}</p>
    <p>Airline Name: {{ airline.name }}</p>
    <p>Country: {{ airline.country }}</p>
    <p>Slogan: {{ airline.slogan }}</p>
    <p>Headquarters: {{ airline.head_quarters }}</p>
    <p>
      Website: <a :href="airline.website" target="_blank">{{ airline.website }}</a>
    </p>
    <p>Established: {{ airline.established }}</p>
  </div>
</template>

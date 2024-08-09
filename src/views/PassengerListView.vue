<script setup lang="ts">
import PassengerCard from '@/components/PassengerCard.vue'
import { type Passenger } from '@/types'
import { ref, onMounted, computed, watchEffect } from 'vue'
import PassengerService from '@/services/PassengerService'

const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  size: {
    type: Number,
    required: true
  }
})

console.log('props:', props)

const passengers = ref<Passenger[] | null>(null)
const totalPassenger = ref(0)
const page = computed(() => props.page)
const maxPassenger = computed(() => props.size)
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalPassenger.value / 2)
  return page.value < totalPages
})

onMounted(() => {
  watchEffect(() => {
    PassengerService.getPassengers(maxPassenger.value, page.value)
      //PassengerService.getPassengers(3, 1)
      .then((response) => {
        // console.log(response.data)
        passengers.value = response.data.data
        totalPassenger.value = response.data.totalPassengers
      })
      .catch((error) => {
        console.log('There was an error!', error)
      })
  })
})
</script>

<template>
  <h1>Epstein's Flight List</h1>
  <!-- new element -->
  <div class="passengers">
    <PassengerCard v-for="passenger in passengers" :key="passenger._id" :passenger="passenger" />
  </div>
  <div class="pagination">
    <RouterLink
      :to="{ name: 'passenger-list-view', query: { page: page - 1, size: size } }"
      rel="prev"
      v-if="page != 1"
      >&#60; Prev Page
    </RouterLink>
    <RouterLink
      :to="{ name: 'passenger-list-view', query: { page: page + 1, size: size } }"
      rel="next"
      v-if="hasNextPage"
      >Next Page &#62;
    </RouterLink>
  </div>
</template>

<style scoped>
.passengers {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

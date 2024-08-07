<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
const props = withDefaults(
  defineProps<{
    resource: string
  }>(),
  {
    resource: 'page'
  }
)
</script>
<template>
  <h1>Oops!</h1>
  <h3>The {{ resource }} you're looking for is not here.</h3>
  <router-link :to="{ name: 'passenger-list-view' }">Back to the home Page</router-link>
</template>

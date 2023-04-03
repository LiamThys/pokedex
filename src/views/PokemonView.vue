<script setup lang="ts">
import PokemonDetailed from '@/components/PokemonDetailedComponents/PokemonDetailed.vue'
</script>

<script lang="ts">
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <main>
    <PokemonDetailed />
  </main>
</template>

<style scoped></style>

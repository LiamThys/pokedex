<script setup lang="ts">
import MainTitle from '@/components/MainTitle.vue'
import HeaderBack from '@/components/HeaderBack.vue'
import PokemonPersonalList from '@/components/PokemonPersonalList.vue'

import { onMounted } from 'vue'

onMounted(() => {
  document.body.classList.remove(...document.body.classList)
  document.body.classList.add('favorites')
})
</script>

<script lang="ts"></script>

<template>
  <main>
    <HeaderBack />
    <MainTitle msg="Favorieten" />
    <PokemonPersonalList type="favorites" />
  </main>
</template>

<style>
.favorites {
  background: var(--gradient-favorites);
}
</style>

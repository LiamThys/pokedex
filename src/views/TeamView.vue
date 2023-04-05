<script setup lang="ts">
import MainTitle from '@/components/MainTitle.vue'
import HeaderBack from '@/components/HeaderBack.vue'
import PokemonPersonalList from '@/components/PokemonPersonalList.vue'

import { onMounted } from 'vue'

onMounted(() => {
  document.body.classList.remove(...document.body.classList)
  document.body.classList.add('team')
})
</script>

<script lang="ts"></script>

<template>
  <main>
    <HeaderBack />
    <MainTitle msg="Mijn team" />
    <PokemonPersonalList type="team" />
  </main>
</template>

<style>
.team {
  background: var(--gradient-team);
}
</style>

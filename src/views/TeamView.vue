<script setup lang="ts">
import MainTitle from '@/components/MainTitle.vue'
import HeaderBack from '@/components/HeaderBack.vue'
import PokemonPersonalList from '@/components/PokemonPersonalList.vue'
</script>

<script lang="ts"></script>

<template>
  <main>
    <HeaderBack />
    <MainTitle msg="Mijn team" />
    <PokemonPersonalList type="team" />
  </main>
</template>

<style scoped></style>

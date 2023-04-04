<script setup lang="ts">
import PokemonSearch from '@/components/PokemonSearch.vue'
import PokemonList from '@/components/PokemonList.vue'
import MainTitle from '@/components/MainTitle.vue'
import PokemonListCard from '@/components/PokemonListCard.vue'

import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <MainTitle msg="Pokédex" />
    <PokemonSearch />
    <nav>
      <RouterLink to="/team"> <PokemonListCard listName="Mijn team" listType="team" /></RouterLink>
      <RouterLink to="/favorites">
        <PokemonListCard listName="Favorieten" listType="favorites"
      /></RouterLink>
    </nav>
    <PokemonList />
  </main>
</template>

<style scoped>
nav {
  margin: 10px 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}
</style>

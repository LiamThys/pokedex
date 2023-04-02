<script setup lang="ts">
import PokemonSearch from '@/components/PokemonSearch.vue'
import PokemonList from '@/components/PokemonList.vue'
import MainTitle from '@/components/MainTitle.vue'
import PersonalPokemonList from '@/components/PersonalPokemonList.vue'

import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <MainTitle msg="Pokédex" />
    <PokemonSearch />
    <nav>
      <RouterLink to="/team"
        ><PersonalPokemonList listName="Mijn team" listType="team"
      /></RouterLink>
      <RouterLink to="/favorites"
        ><PersonalPokemonList listName="Favorieten" listType="favorites"
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

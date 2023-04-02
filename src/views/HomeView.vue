<script setup lang="ts">
import PokemonSearch from '@/components/PokemonSearch.vue'
import PokemonList from '@/components/PokemonList.vue'
import MainTitle from '@/components/MainTitle.vue'

import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <MainTitle msg="Pokedex" />
    <nav>
      <RouterLink to="/team">Mijn team</RouterLink>
      <RouterLink to="/favorites">Favorieten</RouterLink>
    </nav>
    <PokemonSearch />
    <PokemonList />
  </main>
</template>

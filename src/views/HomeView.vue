<script setup lang="ts">
import PokemonSearch from '@/components/PokemonSearch.vue'
import PokemonList from '@/components/PokemonList.vue'
import MainTitle from '@/components/MainTitle.vue'
import PokemonListCard from '@/components/PokemonListCard.vue'

import { RouterLink } from 'vue-router'

import { onMounted } from 'vue'

onMounted(() => {
  document.body.classList.remove(...document.body.classList)
})
</script>

<script lang="ts">
export default {
  components: { PokemonList },
  data() {
    return {
      searchValue: '',
      titleColor: 'var(--color-heading)'
    }
  }
}
</script>

<template>
  <main>
    <MainTitle msg="Pokédex" :text-color="titleColor" />
    <PokemonSearch v-model:searchValue="searchValue" />
    <nav>
      <RouterLink to="/team"> <PokemonListCard listName="Mijn team" listType="team" /></RouterLink>
      <RouterLink to="/favorites">
        <PokemonListCard listName="Favorieten" listType="favorites"
      /></RouterLink>
    </nav>
    <PokemonList :searchValue="searchValue" />
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

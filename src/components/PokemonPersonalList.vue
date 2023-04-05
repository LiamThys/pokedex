<script setup lang="ts">
import PokemonListItem from './PokemonListItem.vue'
import { formatNumberToPokemonNr } from '@/utils/utils'
</script>

<script lang="ts">
export default {
  name: 'get-pokemon-personal-list',
  props: {
    type: null
  },
  data() {
    return {
      pokemonList: [] as any
    }
  },
  created() {
    if (this.type === 'favorites') {
      this.pokemonList = JSON.parse(sessionStorage.getItem('favoritesStorage')!)
    } else {
      this.pokemonList = JSON.parse(sessionStorage.getItem('teamStorage')!)
    }
  },
  methods: {
    getPokemon(id: number) {
      this.$router.push({ name: 'pokemon', params: { id: id } })
    }
  }
}
</script>

<template>
  <p v-if="pokemonList.length <= 0">Click on a pokemon to add him to this list.</p>
  <PokemonListItem
    v-for="pokemon in pokemonList"
    :key="pokemon.id"
    :image-url="pokemon.sprites.front_default"
    :imageAlt="pokemon.name"
    :type1="pokemon.types[0].type.name"
    :type2="pokemon.types[1]?.type.name"
    @click="getPokemon(pokemon.id)"
  >
    <template #name>{{ pokemon.name }}</template>
    <template #id>{{ formatNumberToPokemonNr(pokemon.id) }}</template>
    <template #type2>{{ pokemon.types[1]?.type.name }}</template>
    <template #type1>{{ pokemon.types[0].type.name }}</template>
  </PokemonListItem>
</template>

<style scoped>
p {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  padding: 1em;
  text-align: center;

  color: rgba(235, 235, 235, 0.64);

  font-family: 'SF Pro Display';
  font-style: normal;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.374px;
}
</style>

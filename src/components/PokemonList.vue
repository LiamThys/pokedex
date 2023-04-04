<script setup lang="ts">
import PokemonListItem from './PokemonListItem.vue'
import axios from 'axios'
</script>

<script lang="ts">
export default {
  name: 'get-pokemon-list',
  data() {
    return {
      pokemonList: [] as any
    }
  },
  created() {
    axios({
      method: 'get',
      url: 'https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon'
    })
      .then((response) => response.data)
      .then((data) => (this.pokemonList = data))
  },
  methods: {
    getPokemon(id: number) {
      return this.$router.push({ name: 'pokemon', params: { id: id } })
    },
    formatNumber(value: string): string {
      switch (value.toString().length) {
        case 1:
          return 'Nr. 00' + value
        case 2:
          return 'Nr. 0' + value
        case 3:
          return 'Nr. ' + value
        default:
          return 'Missing Nr.'
      }
    }
  }
}
</script>

<template>
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
    <template #id>{{ formatNumber(pokemon.id) }}</template>
    <template #type2>{{ pokemon.types[1]?.type.name }}</template>
    <template #type1>{{ pokemon.types[0].type.name }}</template>
  </PokemonListItem>
</template>

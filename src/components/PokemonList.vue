<script setup lang="ts">
import PokemonListItem from './PokemonListItem.vue'
import axios from 'axios'
</script>

<script lang="ts">
// interface Pokemon {
//   id: number
//   name: string
//   sprites: {
//     front_default: string
//   }
//   types: [
//     {
//       type: {
//         name: string
//       }
//     }
//   ]
// }

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
  >
    <template #name>{{ pokemon.name }}</template>
    <template #id>Nr. 00{{ pokemon.id }}</template>
    <template #type2>{{ pokemon.types[1]?.type.name }}</template>
    <template #type1>{{ pokemon.types[0].type.name }}</template>
  </PokemonListItem>
</template>

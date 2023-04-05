<script setup lang="ts">
import PokemonListItem from './PokemonListItem.vue'
import axios from 'axios'
import { formatNumberToPokemonNr } from '@/utils/utils'
</script>

<script lang="ts">
export default {
  name: 'get-pokemon-list',
  props: { searchValue: null },
  data() {
    return {
      pokemonList: [] as any,
      copyPokemonList: []
    }
  },
  beforeCreate() {
    axios({
      method: 'get',
      url: 'https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon'
    })
      .then((response) => response.data)
      .then((data) => {
        this.pokemonList = data
        this.copyPokemonList = JSON.parse(JSON.stringify(data))
      })
  },
  watch: {
    searchValue: {
      handler() {
        this.sortedListOnSearch()
      },
      immediate: false
    }
  },
  methods: {
    getPokemon(id: number) {
      this.$router.push({ name: 'pokemon', params: { id: id } })
    },
    sortedListOnSearch() {
      if (!this.searchValue) {
        this.pokemonList = this.copyPokemonList
        return
      }

      const filteredPokemon = this.copyPokemonList.filter((pokemon: any) =>
        this.searchValue && isNaN(parseInt(this.searchValue))
          ? pokemon.name.toLowerCase().includes(this.searchValue.toLowerCase())
          : pokemon.id === parseInt(this.searchValue)
      )

      this.pokemonList = filteredPokemon
    }
  }
}
</script>

<template>
  <p v-if="pokemonList.length <= 0">
    Pokemon not found<br />
    <br />
    Try something like 133 or 'pika'
  </p>
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

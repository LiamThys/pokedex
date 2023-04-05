<script setup lang="ts">
import PokemonListItem from '@/components/PokemonListItem.vue'
import { formatNumberToPokemonNr } from '@/utils/utils'

import axios, { type AxiosResponse } from 'axios'
</script>

<script lang="ts">
export default {
  name: 'get-pokemon-evolutions',
  props: {
    id: { type: Number, required: true }
  },
  data() {
    return {
      evolutionChainUrl: null as any,
      evolutionChain: null as any,
      evolutionIds: [] as any,
      evolutions: [] as any
    }
  },
  beforeMount() {
    this.fetchEvolutionChainUrl()
  },
  watch: {
    evolutionChainUrl: {
      handler() {
        this.fetchEvolutions()
      },
      immediate: false
    },
    evolutionChain: {
      handler() {
        this.getEvolutionIds()
      },
      immediate: false
    },
    evolutionIds: {
      handler() {
        this.fetchPokemon()
      },
      immediate: false
    }
  },
  methods: {
    fetchEvolutionChainUrl() {
      axios({
        method: 'get',
        url: 'https://pokeapi.co/api/v2/pokemon-species/' + this.id
      })
        .then((response) => response.data)
        .then((data) => (this.evolutionChainUrl = data))
    },
    fetchEvolutions() {
      axios({
        method: 'get',
        url: this.evolutionChainUrl.evolution_chain.url + ''
      })
        .then((response) => response.data)
        .then((data) => (this.evolutionChain = data))
    },
    getEvolutionIds() {
      let current = this.evolutionChain.chain
      this.evolutionIds.push(this.getId(current.species.url))

      while (current.evolves_to.length) {
        this.evolutionIds.push(this.getId(current.evolves_to[0].species.url))

        current = current.evolves_to[0]
      }
      this.evolutionIds = JSON.parse(JSON.stringify(this.evolutionIds))
    },
    getId(s: string): number {
      return parseInt(s.split('/')[6])
    },
    fetchPokemon() {
      axios
        .all(
          this.evolutionIds.map((id: number) => {
            return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
          })
        )
        .then((responses) => {
          const evolutions = responses.map((response) => (response as AxiosResponse).data)
          this.evolutions = evolutions
        })
    },
    getPokemon(id: number) {
      this.$router.push({ name: 'pokemon', params: { id: id } })
    }
  }
}
</script>

<template>
  <div v-if="evolutions">
    <PokemonListItem
      v-for="pokemon in evolutions"
      :key="pokemon.id"
      :image-url="pokemon.sprites.front_default"
      :imageAlt="pokemon.name"
      :type1="pokemon.types[0].type.name"
      :type2="pokemon.types[1]?.type.name"
      :show-arrow="false"
    >
      <template #name>{{ pokemon.name }}</template>
      <template #id>{{ formatNumberToPokemonNr(pokemon.id) }}</template>
      <template #type2>{{ pokemon.types[1]?.type.name }}</template>
      <template #type1>{{ pokemon.types[0].type.name }}</template>
    </PokemonListItem>
  </div>
</template>

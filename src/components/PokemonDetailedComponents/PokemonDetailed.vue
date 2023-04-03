<script setup lang="ts">
import PokemonAbout from './PokemonAbout.vue'
import PokemonStats from './PokemonStats.vue'
import PokemonMoveSet from './PokemonMoveSet.vue'
import axios from 'axios'
</script>

<script lang="ts">
export default {
  data() {
    return {
      id: this.$route.params.id,
      pokemonDetailed: null as any
    }
  },
  beforeMount() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      axios({
        method: 'get',
        url: `https://pokeapi.co/api/v2/pokemon/${this.id}`
      })
        .then((response) => response.data)
        .then((data) => (this.pokemonDetailed = data))
    }
  }
}
</script>

<template>
  <div class="greetings" v-if="pokemonDetailed">
    <h1 class="green">{{ pokemonDetailed.name }}</h1>
    <img :src="pokemonDetailed.sprites.other['official-artwork'].front_default" />
    <h2>about</h2>
    <PokemonAbout
      :type="pokemonDetailed.types"
      :number="pokemonDetailed.id"
      :height="pokemonDetailed.height"
      :weight="pokemonDetailed.weight"
      :ability="pokemonDetailed.abilities[0].ability.name"
    />
    <h2>statistieken</h2>
    <PokemonStats :stats="pokemonDetailed.stats" />
    <h2>moveset</h2>
    <PokemonMoveSet :moves="pokemonDetailed.moves" />
    <h2>evolutie</h2>
  </div>
</template>

<style scoped>
h1 {
  /* Default/Bold/LargeTitle */

  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  /* identical to box height, or 121% */

  letter-spacing: 0.374px;

  color: #ffffff;
}

h2 {
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.374px;

  color: #ffffff;

  margin: 0.75em 0;
}

img {
  max-width: 100%;
  width: auto;
  height: auto;
}
</style>

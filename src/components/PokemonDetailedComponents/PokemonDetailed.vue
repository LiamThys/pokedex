<script setup lang="ts">
import PokemonAbout from './PokemonAbout.vue'
import PokemonStats from './PokemonStats.vue'
import PokemonMoveSet from './PokemonMoveSet.vue'
import IconFavorite from '@/components/icons/IconFavorite.vue'
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
    },
    addPokemonToList(listType: string) {
      const currentList: any[] = JSON.parse(sessionStorage.getItem(`${listType}Storage`)!)

      if (currentList.filter((e) => e.id === this.pokemonDetailed.id).length < 1) {
        currentList.push({
          id: this.pokemonDetailed.id,
          sprites: {
            front_default: this.pokemonDetailed.sprites.other['official-artwork'].front_default
          },
          name: this.pokemonDetailed.name,
          types: this.pokemonDetailed.types
        })
      }

      sessionStorage.setItem(`${listType}Storage`, JSON.stringify(currentList))
    }
  }
}
</script>

<template>
  <div class="greetings" v-if="pokemonDetailed">
    <IconFavorite class="favoriteButton" @click="addPokemonToList('favorites')" />
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
    <button class="teamButton" @click="addPokemonToList('team')">Toevoegen aan mijn team</button>
  </div>
</template>

<style scoped>
.teamButton {
  position: sticky;

  width: 100%;
  bottom: 1em;

  padding: 0.5em;

  background: #1f2029;
  border-radius: 100px;
  border: none;

  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.408px;

  color: #ffffff;
}

.favoriteButton {
  display: flex;
  float: right;

  height: auto;
  width: 48px;
  pointer-events: all;
}

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

  float: left;
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

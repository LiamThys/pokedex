<script setup lang="ts">
import MainTitle from '@/components/MainTitle.vue'
import HeaderBack from '@/components/HeaderBack.vue'
import PokemonAbout from './PokemonAbout.vue'
import PokemonStats from './PokemonStats.vue'
import PokemonMoveSet from './PokemonMoveSet.vue'
import PokemonEvolutions from './PokemonEvolutions.vue'
import IconFavorite from '@/components/icons/IconFavorite.vue'
import IconFavoriteFill from '@/components/icons/IconFavoriteFill.vue'
import axios from 'axios'

import { onMounted } from 'vue'

onMounted(() => {
  document.body.classList.remove(...document.body.classList)
})
</script>

<script lang="ts">
export default {
  data() {
    return {
      id: this.$route.params.id,
      pokemonDetailed: null as any,
      isFavorite: false,
      isTeam: false
    }
  },
  beforeMount() {
    this.fetchData()
  },
  updated() {
    this.isFavorite = this.isAdded('favorites')
    this.isTeam = this.isAdded('team')
    document.body.classList.add(this.pokemonDetailed.types[0].type.name)
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

      if (listType === 'favorites' || (listType === 'team' && currentList.length < 6)) {
        if (currentList.filter((e) => e.id === this.pokemonDetailed.id).length < 1) {
          currentList.push({
            id: this.pokemonDetailed.id,
            sprites: {
              front_default: this.pokemonDetailed.sprites.other['official-artwork'].front_default
            },
            name: this.pokemonDetailed.name,
            types: this.pokemonDetailed.types
          })

          // workaround non reactivity for sessionStorage
          if (listType === 'favorites') {
            this.isFavorite = true
          } else {
            this.isTeam = true
          }
        }
      }
      sessionStorage.setItem(`${listType}Storage`, JSON.stringify(currentList))
    },
    removePokemonFromList(listType: string) {
      const currentList: any[] = JSON.parse(sessionStorage.getItem(`${listType}Storage`)!)

      currentList.splice(
        currentList.find((e) => e.id === this.pokemonDetailed.id),
        1
      )

      // workaround non reactivity for sessionStorage
      if (listType === 'favorites') {
        this.isFavorite = false
      } else {
        this.isTeam = false
      }

      sessionStorage.setItem(`${listType}Storage`, JSON.stringify(currentList))
    },
    isAdded(listType: string) {
      const currentList: any[] = JSON.parse(sessionStorage.getItem(`${listType}Storage`)!)
      return currentList.some((e) => e.id === this.pokemonDetailed.id)
    }
  }
}
</script>

<template>
  <div class="greetings" v-if="pokemonDetailed">
    <IconFavorite
      class="favoriteButton"
      v-show="!isFavorite"
      @click="addPokemonToList('favorites')"
    />
    <IconFavoriteFill
      class="favoriteButton"
      v-show="isFavorite"
      @click="removePokemonFromList('favorites')"
    />
    <HeaderBack />
    <MainTitle :msg="pokemonDetailed.name" />
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
    <PokemonStats
      :base_experience="pokemonDetailed.base_experience"
      :stats="pokemonDetailed.stats"
    />
    <h2>moveset</h2>
    <PokemonMoveSet :moves="pokemonDetailed.moves" />
    <h2>evolutie</h2>
    <PokemonEvolutions :id="pokemonDetailed.id" />
    <button class="teamButton" v-show="!isTeam" @click="addPokemonToList('team')">
      Toevoegen aan mijn team
    </button>
    <button class="teamButton" v-show="isTeam" @click="removePokemonFromList('team')">
      Verwijderen van mijn team
    </button>
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

  height: 32px;
  width: 32px;
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

<style>
.grass {
  background: linear-gradient(180deg, var(--type-grass) 0%, #89e2b3 100%);
}
.fire {
  background: linear-gradient(180deg, var(--type-fire) 0%, #dbb469 100%);
}
.water {
  background: linear-gradient(180deg, var(--type-water) 0%, #456dc3 100%);
}
.poison {
  background: linear-gradient(180deg, var(--type-poison) 0%, #a47ec8 100%);
}
.normal {
  background: linear-gradient(180deg, var(--type-normal) 0%, rgb(83, 83, 83) 100%);
}
.ghost {
  background: linear-gradient(180deg, var(--type-ghost) 0%, #9862a3 100%);
}
.psychic {
  background: linear-gradient(180deg, var(--type-psychic) 0%, #f3667e 100%);
}
.fairy {
  background: linear-gradient(180deg, var(--type-fairy) 0%, #fdb9c2 100%);
}
.ground {
  background: linear-gradient(180deg, var(--type-ground) 0%, #dd9755 100%);
}
.flying {
  background: linear-gradient(180deg, var(--type-flying) 0%, #a888ff 100%);
}
.bug {
  background: linear-gradient(180deg, var(--type-bug) 0%, #bb9722 100%);
}
.electric {
  background: linear-gradient(180deg, var(--type-electric) 0%, #ffad33 100%);
}
.fighting {
  background: linear-gradient(180deg, var(--type-fighting) 0%, #bb445e 100%);
}
.rock {
  background: linear-gradient(180deg, var(--type-rock) 0%, #bb8866 100%);
}
.steel {
  background: linear-gradient(180deg, var(--type-steel) 0%, #7786b8 100%);
}
.ice {
  background: linear-gradient(180deg, var(--type-ice) 0%, #668aff 100%);
}
.dragon {
  background: linear-gradient(180deg, var(--type-dragon) 0%, #b166ee 100%);
}
</style>

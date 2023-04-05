<script setup lang="ts">
import IconPokeball from './icons/IconPokeball.vue'
</script>

<script lang="ts">
export default {
  props: {
    listName: String,
    listType: String
  },
  methods: {
    getListTotal(list: String): number {
      switch (list) {
        case 'team':
          return JSON.parse(sessionStorage.getItem('teamStorage')!).length
        case 'favorites':
          return JSON.parse(sessionStorage.getItem('favoritesStorage')!).length
        default:
          return 0
      }
    }
  }
}
</script>

<template>
  <div class="item" :style="{ background: `var(--gradient-${listType})` }">
    <h2>{{ listName }}</h2>
    <h3>{{ getListTotal(listType as String) }} Pokémon</h3>
    <i>
      <IconPokeball />
    </i>
  </div>
</template>

<style scoped>
.item {
  padding: 15% 2rem;

  /* Purple Gradient */

  border-radius: 10px;

  overflow: hidden;
}

h2 {
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height, or 122% */

  letter-spacing: -0.408px;

  color: var(--vt-c-white);

  position: relative;
  top: 1rem;
  right: 1.2rem;
}

h3 {
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  /* identical to box height, or 147% */

  letter-spacing: -0.408px;

  color: rgba(255, 255, 255, 0.5);

  position: relative;
  top: 1rem;
  right: 1.2rem;
}

i {
  position: absolute;
  top: 6px;
  right: 0px;
  width: 45%;
}
</style>

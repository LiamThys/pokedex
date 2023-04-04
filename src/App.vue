<script setup lang="ts">
import { useSessionStorage } from '@vueuse/core'
import { RouterView } from 'vue-router'

useSessionStorage('favoritesStorage', [])
useSessionStorage('teamStorage', [])
</script>

<template>
  <header></header>

  <RouterView />
</template>

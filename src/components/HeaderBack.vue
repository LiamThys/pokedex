<script setup lang="ts">
import ArrowIcon from '@/components/icons/IconArrowForward.vue'
</script>

<template>
  <div @click="$router.go(-1)">
    <ArrowIcon class="arrow" />
    <p>Terug</p>
  </div>
</template>

<style scoped>
div {
  display: flex;
  align-items: center;
  letter-spacing: -0.408px;

  color: #ffffff;

  cursor: pointer;

  width: max-content;
}

.arrow {
  transform: rotate(180deg);
  margin-right: 0.5em;
  width: 2em;
  height: 2em;
}
</style>

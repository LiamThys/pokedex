<script setup lang="ts">
import SearchIcon from './icons/IconSearch.vue'
</script>

<script lang="ts">
export default {
  props: ['searchValue'],
  emits: ['update:searchValue']
}
</script>

<template>
  <div class="search">
    <i>
      <SearchIcon />
    </i>
    <input
      type="text"
      :value="searchValue"
      @input="$emit('update:searchValue', ($event.target as HTMLInputElement).value)"
      placeholder="Pokémon zoeken"
    />
  </div>
</template>

<style scoped>
.search {
  display: flex;
  align-items: center;
  padding: 7px 8px;
  gap: 6px;

  background: #eff0f1;
  border-radius: 10px;
}

input {
  border: none;
  background: #eff0f1;

  /* ✏️ Placeholder */

  width: 305.37px;
  height: 22px;

  /* Default/Regular/Body */

  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  /* identical to box height, or 129% */

  letter-spacing: -0.408px;

  /* Label Color/Light/Secondary */

  color: rgba(60, 60, 67, 0.6);
}

input:focus {
  outline: none;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--vt-c-icon-light-1);
}

@media (min-width: 1024px) {
}
</style>

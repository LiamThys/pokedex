<script setup lang="ts"></script>

<script lang="ts">
export default {
  props: {
    moves: {
      type: [Object],
      required: true
    }
  }
}
</script>

<template>
  <div class="item">
    <div v-for="move in moves.slice(0, 4)" :key="move.name" class="grid-item">
      <p class="level">level {{ move.version_group_details[0].level_learned_at }}</p>
      <p>{{ move.move.name }}</p>
    </div>
  </div>
</template>

<style scoped>
.item {
  background: #ffffff;
  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  padding: 1rem;

  display: grid;
  grid-template-columns: auto auto;
  row-gap: 1em;
  justify-content: space-evenly;

  text-transform: capitalize;
}

.grid-item {
  display: flex;
}

.level {
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  letter-spacing: -0.5px;

  color: #643cc0;

  background: linear-gradient(109.73deg, rgba(70, 70, 156, 0.2) 0%, rgba(126, 50, 224, 0.2) 100%);
  border-radius: 30px;
  border: solid #643cc0 1px;

  padding: 0 0.75em;

  text-align: center;

  margin-right: 0.5em;
}

p {
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  /* identical to box height, or 133% */

  letter-spacing: -0.5px;

  color: #1f2029;
}
</style>

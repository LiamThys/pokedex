<script lang="ts">
export default {
  props: {
    msg: String,
    textColor: {
      type: String,
      default: 'white'
    }
  }
}
</script>

<template>
  <div class="greetings">
    <h1 :style="{ color: textColor }">{{ msg }}</h1>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;

  /* Default/Bold/LargeTitle */

  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  /* identical to box height, or 121% */

  letter-spacing: 0.374px;

  color: white;

  margin: 0.5em 0.2em;
}

.greetings {
  max-width: fit-content;
}

.greetings h1 {
  text-align: left;
}

@media (min-width: 1024px) {
  .greetings h1 {
    text-align: left;
  }
}
</style>

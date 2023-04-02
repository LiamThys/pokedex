<script setup lang="ts">
import ArrowIcon from './icons/IconArrowForward.vue'
</script>

<script lang="ts">
export default {
  props: {
    imageUrl: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      required: true
    },
    type1: {
      type: String,
      required: true
    },
    type2: {
      type: String,
      required: false
    }
  }
}
</script>

<template>
  <div class="item">
    <img :src="imageUrl" :alt="imageAlt" />
    <div class="card-header">
      <h3>
        <slot name="name"></slot>
      </h3>
      <h4>
        <slot name="id"></slot>
      </h4>
    </div>
    <div class="card-types">
      <p :style="{ background: `var(--type-${type2})` }">
        <slot name="type2"></slot>
      </p>
      <p :style="{ background: `var(--type-${type1})` }">
        <slot name="type1"></slot>
      </p>
    </div>
    <i class="arrowIcon">
      <ArrowIcon />
    </i>
  </div>
</template>

<style scoped>
.item {
  background: var(--color-background-mute);
  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.04);
  border-radius: 10px;

  display: flex;
  align-items: center;

  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.04);
  border-radius: 10px;

  margin-bottom: 10px;
}

.card-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
}

.card-types {
  display: flex;
}

.card-types > p {
  margin-top: -12px;
  margin-left: 4px;

  padding: 0 6px;

  border-radius: 100px;

  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.374px;

  color: #ffffff;

  text-align: center;
}

h3 {
  color: var(--color-heading);

  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.374px;
}

h4 {
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  letter-spacing: 0.374px;
}

.arrowIcon {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-icon);
}

img {
  width: 50px;
  height: 50px;
  margin-right: 20px;
  flex-shrink: 0;
}

@media (min-width: 1024px) {
}
</style>

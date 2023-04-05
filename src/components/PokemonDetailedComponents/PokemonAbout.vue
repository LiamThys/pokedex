<script setup lang="ts">
import IconMale from '@/components/icons/IconMale.vue'
import IconFemale from '@/components/icons/IconFemale.vue'
import { formatNumberToPokemonNr } from '@/utils/utils'
</script>

<script lang="ts">
export default {
  props: {
    type: {
      type: [Object],
      required: true
    },
    number: {
      number: String,
      required: true
    },
    height: {
      height: String,
      required: true
    },
    weight: {
      weight: String,
      required: true
    },
    ability: {
      ability: String,
      required: true
    }
  },
  methods: {
    formatValue(value: unknown): number {
      return parseFloat(value as string) / 10
    }
  }
}
</script>

<template>
  <div class="item">
    <table>
      <tr>
        <td>Type</td>
        <td class="card-types">
          <p v-if="type[1]" :style="{ background: `var(--type-${type[1].type.name})` }">
            {{ type[1].type.name }}
          </p>
          <p :style="{ background: `var(--type-${type[0].type.name})` }">{{ type[0].type.name }}</p>
        </td>
      </tr>
      <tr>
        <td>Nummer</td>
        <td>{{ formatNumberToPokemonNr(number as string) }}</td>
      </tr>
      <tr>
        <td>Hoogte</td>
        <td>{{ formatValue(height) }} m</td>
      </tr>
      <tr>
        <td>Gewicht</td>
        <td>{{ formatValue(weight) }} kg</td>
      </tr>
      <tr>
        <td>Categorie</td>
        <td>Seed</td>
        <!--Not given in api-->
      </tr>
      <tr>
        <td>Geslacht</td>
        <td><IconFemale /><IconMale /></td>
      </tr>
      <tr>
        <td>Vaardigheden</td>
        <td>{{ ability }}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.item {
  background: #ffffff;
  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  padding: 1rem;
}

.card-types {
  display: flex;
}

.card-types > p {
  margin-top: 2px;
  margin-right: 4px;

  padding: 2px 10px;

  border-radius: 100px;

  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.374px;

  color: #ffffff;
}

td:first-child {
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  letter-spacing: -0.408px;

  color: #acb2c1;

  padding-right: 2em;
}

td:last-child {
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  letter-spacing: -0.408px;

  /* Dark 1 */

  color: #1f2029;
}

td:last-child svg {
  margin-right: 8px;
}
</style>

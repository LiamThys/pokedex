<script setup lang="ts">
import { capitalize } from 'vue'
</script>

<script lang="ts">
export default {
  props: {
    base_experience: {
      type: Number,
      required: true
    },
    stats: {
      type: [Object],
      required: true
    }
  },
  methods: {
    getProgressValue(value: number): string {
      const tmp = (value / this.base_experience) * 100
      return tmp > 100 ? '100%' : (value / this.base_experience) * 100 + '%'
    },
    getProgressColor(value: number): string {
      return value < this.base_experience ? 'rgba(223, 101, 99, 1)' : 'rgba(112, 193, 143, 1)'
    },
    shorten(string: string) {
      switch (string) {
        case 'Special-attack':
          return 'Sp. Atk'
        case 'Special-defense':
          return 'Sp. Def'
        default:
          return string
      }
    }
  }
}
</script>

<template>
  <div class="stats">
    <table>
      <tr v-for="stat in stats" :key="stat.name">
        <td>{{ shorten(capitalize(stat.stat.name)) }}</td>
        <td>{{ stat.base_stat }}</td>
        <td>
          <div class="progressParent">
            <div
              :style="{
                width: getProgressValue(stat.base_stat),
                background: getProgressColor(stat.base_stat)
              }"
              class="progressBar"
            ></div>
          </div>
        </td>
      </tr>
      <tr>
        <td>Total</td>
        <td>{{ base_experience }}</td>
        <td>
          <div class="progressParent">
            <div
              :style="{
                width: getProgressValue(base_experience),
                background: getProgressColor(base_experience)
              }"
              class="progressBar"
            ></div>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.progressParent {
  height: 4px;
  background: rgba(172, 178, 193, 0.2);
  width: 100%;
  border-radius: 25px;
}

.progressBar {
  height: 4px;
}

.stats {
  background: #ffffff;
  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  padding: 1rem;
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

  padding-right: 1em;
}

td:nth-child(2) {
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

td:last-child {
  width: 100%;
}
</style>

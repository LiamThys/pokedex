<script setup lang="ts"></script>

<script lang="ts">
export default {
  props: {
    stats: {
      type: [Object],
      required: true
    }
  },
  methods: {
    getProgressValue(value: number): string {
      return (value / 90) * 100 + '%'
    },
    getProgressColor(value: number): string {
      return value < 50 ? 'rgba(223, 101, 99, 1)' : 'rgba(112, 193, 143, 1)'
    }
  }
}
</script>

<template>
  <div class="item">
    <table>
      <tr v-for="stat in stats" :key="stat.name">
        <td>{{ stat.stat.name }}</td>
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
    </table>
  </div>
</template>

<style scoped>
.progressParent {
  height: 4px;
  background: rgba(172, 178, 193, 0.2);
  width: 100%;
}

.progressBar {
  height: 4px;
}

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

table {
  white-space: nowrap;
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

  padding-right: 0.2em;
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

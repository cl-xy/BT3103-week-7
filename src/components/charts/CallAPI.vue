<template>
  <div class="chart">
    <h1>Line Chart</h1>
    <line-chart></line-chart>
  </div>
</template>

<script>
import Chart from "./CallAPI.js";
export default {
  components: {
    'line-chart': Chart
  }
};
</script>

<style>
</style>
<template>
    <div id = "dashboard">
        <!--<bar-chart></bar-chart>-->
        <line-chart></line-chart>
    </div>
</template>

<script>
//import BarChart from './charts/BarChart.vue'
import LineChart from './charts/CallAPI.vue'

export default {
    components: {
        //'bar-chart': BarChart,
        'line-chart': LineChart
    }
}
</script>

<style scoped>
</style>
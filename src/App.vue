<template>
  <div id = "app">
    <h1>Jcheez's Zi Char</h1>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  components: {
    'app-header': Header
  }
}
</script>
<style>
  h1 {
    background-color: cornflowerblue;
    color: white;
    text-align: center;
  }
</style>

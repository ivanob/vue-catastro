<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Catastro from './components/Catastro';
import info from './data_catastros.json';

export default {
  name: 'app',
  components: {
    Catastro,
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  background-color: #fcf9f2;
}
</style>

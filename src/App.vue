<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Catastro></Catastro>
  </div>
</template>

<script>
import Catastro from './components/Catastro';

export default {
  name: 'app',
  components: {
    Catastro,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

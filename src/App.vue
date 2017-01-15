<template>
  <div id="app">
    <!--<Catastro :nombre="nombre" :pages="pages" :numPaginas="numPaginas"></Catastro>-->
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
  },
  data() {
    return {
      nombre: info[0].nombre,
      numPaginas: info[0].paginas.length,
      pages: info[0].paginas
    };
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
  margin-top: 60px;
}
</style>

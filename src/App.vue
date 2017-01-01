<template>
  <div id="app">
    <Catastro :nombre="nombre" :page1="page1"></Catastro>
  </div>
</template>

<script>
import Catastro from './components/Catastro';
import data from './data_catastros.json';

export default {
  name: 'app',
  components: {
    Catastro,
  },
  data() {
    return {
      nombre: data.data[0].nombre
    };
  },
  computed: {
    page1: function () {
      return "<p>Esto es la pagina 1</p>"
    }
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

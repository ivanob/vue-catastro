<template>
  <div class="portada">
    <!-- JUMBOTRON -->
    <div class="jumbotron">
      <h1>Valle de La Masón</h1>
      <h2>En el catastro del Marqués de la Ensenada</h2>
      <h4>Por Ángel Obeso González</h4>
      <p class="left">
        <router-link to="/informacion"><a class="btn btn-primary btn-lg" href="#" role="button">Saber más</a></router-link>
        <router-link to="/preguntas"><a class="btn btn-primary btn-lg" href="#" role="button">Preguntas del catastro</a></router-link>
        <router-link to="/valle"><a class="btn btn-primary btn-lg" href="#" role="button">El valle</a></router-link>
      </p>
    </div>

    <!-- CAROUSEL -->
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
      <li data-target="#carousel-example-generic" data-slide-to="1"></li>
      <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      <li data-target="#carousel-example-generic" data-slide-to="3"></li>
      <li data-target="#carousel-example-generic" data-slide-to="4"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner">
      <div class="item active">
        <img src="static/portraits/quintanilla.jpg" style="width:100%;">
        <div class="carousel-caption">
        	<h3>Lugar de Quintanilla</h3>
          <a id="catastro-selector" class="btn btn-primary" role="button" v-on:click="catastroSelected(0)">Leer catastro</a>
        </div>
      </div>
      <div class="item">
        <img src="static/portraits/cires.jpg" style="width:100%;">
        <div class="carousel-caption">
        	<h3>Lugar de Cires</h3>
          <a id="catastro-selector" class="btn btn-primary" role="button" v-on:click="catastroSelected(1)">Leer catastro</a>
        </div>
      </div>
      <div class="item">
        <img src="static/portraits/lafuente.jpg" style="width:100%;">
        <div class="carousel-caption">
        	<h3>Lugar de La Fuente</h3>
          <a id="catastro-selector" class="btn btn-primary" role="button" v-on:click="catastroSelected(2)">Leer catastro</a>
        </div>
      </div>
      <div class="item">
        <img src="static/portraits/sobrelapena.jpg" style="width:100%;">
        <div class="carousel-caption">
        	<h3>Lugar de Sobrelapeña</h3>
          <a id="catastro-selector" class="btn btn-primary" role="button" v-on:click="catastroSelected(3)">Leer catastro</a>
        </div>
      </div>
      <div class="item">
        <img src="static/portraits/rio.jpg" style="width:100%;">
        <div class="carousel-caption">
        	<h3>Lugar de Rio</h3>
          <a id="catastro-selector" class="btn btn-primary" role="button" v-on:click="catastroSelected(4)">Leer catastro</a>
        </div>
      </div>
    </div>

      <!-- Controls -->
      <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
      </a>
      <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
      </a>
    </div> <!-- Carousel -->

  </div>
</template>

<script>
import info from '../data_catastros.json';

export default {
  name: 'portada',
  components : {  },
  props:[],
  methods: {
    catastroSelected: function (i) {
        //this.$router.push({ path: '/catastro', params: {nombre:"La Penia"}})
        this.$router.push({ name: "catastro", params: {
          nombrePueblo:info[i].nombre,
          numPaginas: info[i].numPaginas,
          folder: info[i].folder
        }})
    }
  }
}
</script>

<style>
.jumbotron {
  margin: 25px;
  padding: 25px;
}
#carousel-example-generic {
  margin: 50px;
}
#catastro-selector{
  margin: 10px;
}
</style>

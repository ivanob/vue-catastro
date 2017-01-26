<template>
  <div class="portada">
    <!-- JUMBOTRON -->
    <div class="jumbotron">
      <h1>Valle de La Masón</h1>
      <h2>En el catastro del Marqués de la Ensenada</h2>
      <p class="text-left">
        <router-link to="/informacion"><a class="btn btn-primary btn-lg" href="#" role="button">Saber más</a></router-link>
        <router-link to="/preguntas"><a class="btn btn-primary btn-lg" href="#" role="button">Preguntas del catastro</a></router-link>
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
        <img src="http://placehold.it/1200x315" alt="...">
        <div class="carousel-caption">
        	<h3>Lugar de Cires</h3>
          <a class="btn btn-primary" href="#" role="button">Leer catastro</a>
        </div>
      </div>
      <div class="item">
        <img src="http://placehold.it/1200x315" alt="...">
        <div class="carousel-caption">
        	<h3>Lugar de La Fuente</h3>
        </div>
      </div>
      <div class="item">
        <img src="http://placehold.it/1200x315" alt="...">
        <div class="carousel-caption">
        	<h3>Lugar de Quintanilla</h3>
        </div>
      </div>
      <div class="item">
        <img src="http://placehold.it/1200x315" alt="...">
        <div class="carousel-caption">
        	<h3>Lugar de Rio</h3>
        </div>
      </div>
      <div class="item">
        <img src="http://placehold.it/1200x315" alt="...">
        <div class="carousel-caption">
        	<h3>Lugar de Sobrepeña</h3>
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
export default {
  name: 'portada',
  components : {  },
  props:[]
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

</style>

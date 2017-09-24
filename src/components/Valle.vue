<template>
  <div class="valle">
    <h1>El Valle</h1>
    <a class="btn btn-primary" role="button" v-on:click="backToPortrait()">Volver a portada</a>
    <div class="panel panel-default">
    <div class="panel-body">

    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="image, imageIndex in images"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image.poster + ')', width: '300px', height: '200px' }"
    ></div>
    </div>
    </div>
</div>
</template>

<script>
  import VueGallery from 'vue-gallery';

  export default {
    data: function () {
    return {
      images: [
        {
          title: 'Valle de Lamasón',
          href: '/static/gallery/portada.jpg',
          type: 'image/jpeg',
          poster: '/static/gallery/portada.jpg'
        },
        {
          title: 'Cires',
          href: '/static/gallery/cires1.jpg',
          type: 'image/jpeg',
          poster: '/static/gallery/cires1.jpg'
        },
        {
          title: 'Lafuente',
          href: '/static/gallery/fuente1.jpg',
          type: 'image/jpeg',
          poster: '/static/gallery/fuente1.jpg'
        },
        {
          title: 'Lafuente - Barrio de San Pedro',
          href: '/static/gallery/fuente2.jpg',
          type: 'image/jpeg',
          poster: '/static/gallery/fuente2.jpg'
        },
        {
          title: 'Lafuente – Barrio de Burio al fondo',
          href: '/static/gallery/fuente3.jpg',
          type: 'image/jpeg',
          poster: '/static/gallery/fuente3.jpg'
        },
        {
          title: 'Lafuente - Barrio Burio y Los Pumares',
          href: '/static/gallery/fuente4.jpg',
          type: 'image/jpeg',
          poster: '/static/gallery/fuente4.jpg'
        },
        {
          title: 'Quintanilla',
          href: '/static/gallery/quintanilla1.jpg',
          type: 'image/jpeg',
          poster: '/static/gallery/quintanilla1.jpg'
        },
        {
          title: 'Quintanilla – Barrio Venta Fresnedo',
          href: '/static/gallery/quintanilla2.jpg',
          type: 'image/jpeg',
          poster: '/static/gallery/quintanilla2.jpg'
        },
        {
          title: 'Rio',
          href: '/static/gallery/rio1.jpg',
          type: 'image/jpeg',
          poster: '/static/gallery/rio1.jpg'
        },
        {
          title: 'Sobrelapeña',
          href: '/static/gallery/sobrelapena.jpg',
          type: 'image/jpeg',
          poster: '/static/gallery/sobrelapena.jpg'
        }
        ],
        index: null
      };
    },
    methods: {
      backToPortrait: function() {
        this.$router.replace({path:"/"});
      }
    },
    components: {
      'gallery': VueGallery
    }
  }
</script>

<style type="text/css">
.image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
</style>

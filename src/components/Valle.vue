<template>
  <div class="valle">
    <div>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="image, imageIndex in images"
      @click="index = imageIndex"
      :style="styleObject(image)"
    ></div>
  </div>
  </div>
</template>

<script>
  import VueGallery from 'vue-gallery';

  export default {
    data: function () {
      return {
        images: [
          'https://dummyimage.com/800/ffffff/000000',
          'https://dummyimage.com/1600/ffffff/000000',
          'https://dummyimage.com/1280/000000/ffffff',
          'https://dummyimage.com/400/000000/ffffff',
        ],
        index: null,

      };
    },
    methods: {
      styleObject: function(image){
        return {
          backgroundImage: 'url(' + image + ')',
           width: '50px',
           height: '50px'
        }
      }
    },

    components: {
      'gallery': VueGallery
    },
  }
</script>

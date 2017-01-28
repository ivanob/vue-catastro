<template>
  <div class="catastro">
    <div class="page-header text-center">
   <h1>{{nombre}}</h1>
 </div>
<div class="wrapper container">
 <div class="modal-body row">
   <div class="col-md-6 text-right">
     <!-- Your first column here -->
      <!--<img id="zoom_07" :src="selectedPage.scan" class="img-thumbnail" width="404" height="336" data-zoom-image="static/pueblo1/scan1.jpg">-->
      <img id="zoom_01" src='static/pueblo1/image-small.jpg' data-zoom-image="static/pueblo1/image-big.jpg"/>
   </div>
   <div class="col-md-6 text-left">
     <!-- Your second column here -->
     <!--<div v-html="selectedPage.transcripcion"></div>-->
     <div v-html="selectedTranscription"></div>
   </div>
 </div>
</div>

   <div class="text-center">
     <pagination :current-page="currentPage"
                   :total-pages="totalPages"
                   @page-changed="pageOneChanged">
       </pagination>
   </div>
  </div>
</template>

<script lang="babel">
import Pagination from './Pagination.vue'
//var path = require('path');
require('magnify')


export default {
  name: 'catastro',
  components : { Pagination },
  props:['nombre','pages','numPaginas'],
  data() {
    return {currentPage: 1}
  },
    computed: {
     totalPages() {
       return this.numPaginas;
     },
     selectedTranscription() {
       //return this.pages[this.currentPage-1]
       this.id = "trans" + this.currentPage
       return require('../../static/pueblo1/' + this.id+ ".html")
     },
     nombre(){
       console.log(this.$route.params.id)
       return this.$route.params.nombre
     }
  },
  methods: {
      pageOneChanged: function (pageNum) {
          this.currentPage = pageNum
      }
  },
  mounted() {
    $('#zoom_01').elevateZoom({
      zoomType: "inner",
      zoomType : "lens",
      lensShape : "round",
      zoomWindowFadeIn: 500,
      zoomWindowFadeOut: 750
    });
  }
};


</script>

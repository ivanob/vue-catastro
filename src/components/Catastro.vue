<template>
  <div class="catastro">
    <div class="page-header text-center">
   <h1>{{nombre}}</h1>
 </div>
<div class="wrapper container">
 <div class="modal-body row">
   <div class="col-md-8 text-right">
     <!-- Your first column here -->
      <!--<img id="zoom_07" :src="selectedPage.scan" class="img-thumbnail" width="404" height="336" data-zoom-image="static/pueblo1/scan1.jpg">-->
      <img id="zoom_01" :src="selectedScanSmall" v-bind:data-zoom-image="selectedScanBig"/>
   </div>
   <div class="col-md-4 text-left">
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
require('magnify')

export default {
  name: 'catastro',
  components : { Pagination },
  props:['nombrePueblo','numPaginas','folder'],
  data() {
    return {currentPage: 1}
  },
    computed: {
    nombre(){
      return this.$route.params.nombrePueblo
    },
     totalPages() {
       return this.$route.params.numPaginas;
     },
     selectedTranscription() {
       return require('../../static/'+ this.$route.params.folder + '/trans' + this.currentPage + ".html")
     },
     selectedScanSmall() {
       return require('../../static/'+ this.$route.params.folder + '/images/scan' + this.currentPage + "-small.jpg")
     },
     selectedScanBig() {
       $("#zoom_01").data('zoom-image', '../../static/'+ this.$route.params.folder + '/images/scan' + this.currentPage + "-big.jpg").elevateZoom({
          zoomType: "inner",
          zoomType : "lens",
          lensShape : "round",
          zoomWindowFadeIn: 500,
          zoomWindowFadeOut: 750
       });
       return require('../../static/'+ this.$route.params.folder + '/images/scan' + this.currentPage + "-big.jpg")
     }
  },
  methods: {
      pageOneChanged: function (pageNum) {
          this.currentPage = pageNum
      },
      reloadZoomImage: function(){
        console.log("aaaa")
        $("#zoom_01").data('zoom-image', '../../static/'+ this.$route.params.folder + '/images/scan' + this.currentPage + "-big.jpg").elevateZoom({
           zoomType: "inner",
           zoomType : "lens",
           lensShape : "round",
           zoomWindowFadeIn: 500,
           zoomWindowFadeOut: 750
        });
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

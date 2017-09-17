<template>
  <div class="catastro">
    <div class="page-header text-center">
   <h1>{{nombre}}</h1>
   <a class="btn btn-primary" role="button" v-on:click="backToPortrait()">Volver a portada</a>
 </div>
 <div id="catastro-body">
  <div class="wrapper container">
   <div class="modal-body row">
     <div class="col-md-8 text-right">
       <img :src="selectedScanSmall" data-action="zoom" v-bind:data-original="selectedScanBig" />
     </div>
     <div class="col-md-4 text-left">
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
  </div>
</template>

<script lang="babel">
import Pagination from './Pagination.vue'
import Zooming from 'zooming'

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
       return require('../../static/'+ this.$route.params.folder + '/images/scan' + this.currentPage + "-big.jpg")
     }
  },
  methods: {
      pageOneChanged: function (pageNum) {
          this.currentPage = pageNum
      },
      backToPortrait: function() {
        this.$router.replace({path:"/"});
      }
  },
  mounted() {
    const zooming = new Zooming()
    zooming.listen('.img-zoomable')
    if(this.$route.params.nombrePueblo === undefined) this.$router.replace({path:"/"});
  }
};
</script>

<style>
#catastro-body{
  background-color: white;
}
</style>

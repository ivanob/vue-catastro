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
      <!--<img id="zoom_01" :src="selectedScanSmall" v-bind:data-zoom-image="selectedScanBig"/>-->
      <img :src="selectedScanSmall" data-action="zoom" v-bind:data-original="selectedScanBig" />
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
import Zooming from 'zooming'

export default {
  name: 'catastro',
  components : { Pagination },
  props:['nombrePueblo','numPaginas','folder'],
  data() {
    return {currentPage: 1}
  },
  created() {
    // `this` points to the vm instance
    //if(this.$route.params.name === undefined) this.$router.push({name:"error"});
    //else this.$route.params;
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
      }
  },
  mounted() {
    const zooming = new Zooming()
    zooming.listen('.img-zoomable')
    if(this.$route.params.nombrePueblo === undefined) this.$router.replace({path:"/"});

  }
};


</script>

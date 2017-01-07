<template>
  <div class="catastro">
    <div class="page-header text-center">
   <h1>{{nombre}}</h1>
 </div>
<div class="wrapper container">
 <div class="modal-body row">
   <div class="col-md-6 text-right">
     <!-- Your first column here -->
     <img :src="selectedPage.scan" class="img-thumbnail" alt="Cinque Terre" width="404" height="336">
   </div>
   <div class="col-md-6 text-left">
     <!-- Your second column here -->
     <!--{{page1}}-->
     <div v-html="selectedPage.transcripcion"></div>
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

<script>
import Pagination from './Pagination.vue'

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
     /*currentPage() {
       return 1;
     },*/
     selectedPage() {
       return this.pages[this.currentPage-1]
     }
  },
  methods: {
      pageOneChanged: function (pageNum) {
          this.currentPage = pageNum
      }
  }
};

</script>

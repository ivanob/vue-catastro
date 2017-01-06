<template>
  <div class="catastro">
    <div class="page-header text-center">
   <h1>{{nombre}}</h1>
 </div>
<div class="wrapper container">
 <div class="modal-body row">
   <div class="col-md-6 text-right">
     <!-- Your first column here -->
     <img src="../assets/pueblo1/pic1_pueblo1.jpg" class="img-thumbnail" alt="Cinque Terre" width="404" height="336">
   </div>
   <div class="col-md-6 text-left">
     <!-- Your second column here -->
     <!--{{page1}}-->
     <div v-html="page1"></div>
   </div>
 </div>
</div>

   <div class="text-center">
     <pagination :current-page="pageOne.currentPage"
                   :total-pages="pageOne.totalPages"
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
  props:['nombre','page1'],
  data() {
        return {
            pageOne: {
                currentPage: 5,
                totalPages: 5
            }
        }
    },

    methods: {
        pageOneChanged: function (pageNum) {
            this.pageOne.currentPage = pageNum
        }
    }
};

</script>

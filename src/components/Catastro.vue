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
 <!--<nav aria-label="Page navigation">
 <ul class="pagination">
 <li>
   <a href="#" aria-label="Previous">
     <span aria-hidden="true">&laquo;</span>
   </a>
 </li>
 <li><a href="#">1</a></li>
 <li><a href="#">2</a></li>
 <li><a href="#">3</a></li>
 <li><a href="#">4</a></li>
 <li><a href="#">5</a></li>
 <li>
   <a href="#" aria-label="Next">
     <span aria-hidden="true">&raquo;</span>
   </a>
 </li>
 </ul>
 </nav>-->
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
                currentPage: 1,
                totalPages: 10
            }
        }
    },

    methods: {
        pageOneChanged (pageNum) {
            this.pageOne.currentPage = pageNum
        }
    }
};

</script>

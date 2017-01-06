<template>
<ul class="pagination">
  <li>
    <a href="#" @click.prevent="pageChanged(1)" aria-label="Previous">
      <span aria-hidden="true">&laquo;</span>
    </a>
  </li>
  <li v-for="n in paginationRange" :class="activePage(n)">
    <a href="#" @click.prevent="pageChanged(n)">{{ n }}</a>
  </li>
  <li>
    <a href="#" @click.prevent="pageChanged(lastPage)" aria-label="Next">
      <span aria-hidden="true">&raquo;</span>
    </a>
  </li>
</ul>
</template>

<script>

export default {
  name: 'Pagination'/*,
  props:['nombre','page1']
  ready: function(){
    console.log("LLEGA")
    $('ul.pagination li a').on('click',function(e){
            e.preventDefault();
            var tag = $(this);
            console.log(" click on "+tag.text());
          });
  }*/
};

</script>

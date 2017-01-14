<template>
  <div class="portada">
    <h1>Esto es la portada</h1>
    <div data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>
      <div><h3>5</h3></div>
      <div><h3>6</h3></div>
    </div>
  </div>
</template>

<script>
require('slick-carousel')

export default {
  name: 'portada',
  components : {  },
  props:[]
}
</script>

<style>

</style>

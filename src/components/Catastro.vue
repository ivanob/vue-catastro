<template>
  <div class="catastro">
    <h1>Hola amigos {{msg}}</h1>
    <button type="button" class="btn btn-primary">Primary</button>
    <div class="jumbotron">
  <h1>Bootstrap Tutorial</h1>
  <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive,
  mobile-first projects on the web.</p>
</div>
<div class="container">
  <p>This is some text.</p>
  <p>This is another text.</p>
</div>
  </div>
</template>

<script>
export default {
  name: 'catastro',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

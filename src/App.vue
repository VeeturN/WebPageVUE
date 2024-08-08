
<template>
  <div id="all">
<header>
  <hr>
<h1>Stolen cars for sale</h1>
<hr>
</header>
<body>
  <div id="top">
    <hr>
<router-link to= "/"> Home </router-link>
|
<router-link to= "/info"> info </router-link>
<hr>
</div>
<div id="bot">
<router-view />
</div>
</body>
</div>
</template>


<script>

  export default {
    name: 'App',

    data() {
      return {
        title: 'Welcome to Vue 3',
        cos: 'Fajnie Bsssylo',
        show: false,
        showM: false
    }
  },
  methods:{
    toggle(){
      this.show = !this.show
    },
    toggleM(){
      this.showM = !this.showM
    }
  }
}

</script>

<style scoped>
  header{
    background-color: #d000ff;

  }
  body{
    display: inline-block;

  }
  #top{
    background-color: #d000ff;
    padding: 10px;
  
  }
  a{
    margin: 80px;
    font-size: 20px;
    text-decoration: none;
    color: white;
    font-family: cursive;
  }
  h1{
    color: white;
    text-align: center;
    font-family: cursive;
  }
  hr {
    color: black;
    border: none; /* Usuwa domyślną ramkę */
    height: 2px; /* Ustawia wysokość linii */
    background-color: black; /* Ustawia kolor tła */
}
</style>

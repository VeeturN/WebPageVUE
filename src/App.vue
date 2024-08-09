
<template>
  <body :class="{ black: isBlack }">
<div :class="{ black: isBlack }" id="ok2" >
    <hr>
        <h1>Cars for sale</h1>
    <hr>
</div>

<div :class="{ black: isBlack }" id="ok" >
    <div>
    <hr>
        <span @click="changeColor">Style</span>
        |
        <router-link to= "/employee"> Employee </router-link>
        |
        <router-link to= "/"> Home </router-link>
        |
        <router-link to= "/info"> Info </router-link>
        |
        <router-link to= "/api"> API </router-link>
    <hr>
    </div>
    <div :class="{ black: isBlack }">
        <router-view @close="toggleModal"/>
    </div>
  </div>
</body>
</template>

<script>

  export default {
        name: 'App',

    data() {
      return {
        title: 'Welcome to Vue 3',
        cos: 'Fajnie Bsssylo',
        show: false,
        showM: false,
        isBlack: false
    }
  },
    methods:{
    //   changeColor() {
    //   this.$emit('change-color');
    // }
    changeColor() {
      alert('Color changed');
      this.$emit('change-color');
      this.isBlack = !this.isBlack; // Toggle the isBlack property
    }
    }
}

</script>

<style>
.black {
  background-color: black !important;
  color: white !important;
}
.black hr{
  color: white;
    border: none; 
    height: 2px; 
    background-color: white; 
}
  #ok2 {
      background-color: #d000ff;
      padding: 1rem;
      text-align: center;
      font-family: cursive;
    }
  #ok {
    background-color: #d000ff;
      display: block;
      text-align: center;
      width: 100%;
      font-family: cursive;
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
    border: none; 
    height: 2px; 
    background-color: black; 
}
body{
  background-color: #d000ff;
  font-family: cursive;
  margin: 0;
}

</style>

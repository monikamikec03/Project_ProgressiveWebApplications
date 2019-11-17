<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>


import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'app',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
  background-image: url("assets/img/background.jpg") ;
  background-position: center;
  background-size: cover;

}
</style>

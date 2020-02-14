<template>
  <div id="app">
    <div id = "nav">
        <router-link v-if="authenticated" to="/Login" v-on:click.native="logout()" replace  :class = "[authenticated ? 'black' : 'green']">ODJAVI ME</router-link>
    </div>
    <router-view @authenticated="setAuthenticated" />
    <Navbar/>
   <!-- <router-view/>-->
    <!--<Footer/>-->
  </div>
</template>

<script>


import Navbar from './components/Navbar.vue'
//import Footer from './components/Footer.vue'


export default {
  name: 'app',

  data() {
            return {
                authenticated: false,
                mockAccount: {
                    username: "nraboy",
                    password: "password"
                }
                
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        },

  components: {
    Navbar,
    //Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
  //background-image: url("assets/img/background.jpg") ;
  background-size: 100%;

}
.black{
  color:black;
  font-size: 20pt;
  padding-top:20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.black:hover{
  color:orange;
}
.green{
  color:green;
}
#nav{
  padding-top:50px;
  width:20%;
  margin: 0 auto;
}
</style>

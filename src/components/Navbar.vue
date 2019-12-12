<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
    <img class="card-header-pills" src="../assets/logo.png" style="width:4%"/>
      <a class="navbar-brand"><router-link to="/">DVD Haganj</router-link></a>
      <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" >
        <span class="navbar-toggler-icon" v-onclick="toggleNav"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link"><router-link to="aktivnosti">Aktivnosti</router-link></a>
          </li>
          <li class="nav-item">
             <a class="nav-link"><router-link to="natjecanja">Natjecanja</router-link></a>
          </li>
          <li class="nav-item">
             <a class="nav-link"><router-link to="kontakt">Kontakt</router-link></a>
          </li>
          <li class="nav-item">
             <a class="nav-link"><router-link to="login">Login</router-link></a>
          </li>
        </ul>
      </div>
    </div>

<div class="navbar-menu" id="navMenu">
  <!-- navbar-start, navbar-end... -->
</div>
  </nav>
</template>



<script>
export default {

}
</script>

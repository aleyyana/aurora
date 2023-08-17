<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <!-- <nav class="navbar">
      <div class="container-fluid">

        <RouterLink to="/"><img src="../src/assets/img/logo_1.png" alt="logo" class="logo navbar-brand"></RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
        <span class="navbar-toggler-icon"></span>
        </button>
          <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                  <ul class="nav navbar-nav">
                
                <li class="nav-item">
                  <RouterLink class="nav-link active pr-5" to="/">Home</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link pr-5" to="/horoscope">Daily horoscope</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link pr-5" to="/love">Love Compatibility</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link pr-5" to="/about">About</RouterLink>
                </li>
                </ul>
              </div>
           </div>
      </div>
    </nav> -->
<div id="nav">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <RouterLink to="/"><img src="../src/assets/img/logo_1.png" alt="logo" class="logo navbar-brand"></RouterLink>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="navbar-nav mr-auto">
            <RouterLink class="nav-item nav-link" to="/">Home</RouterLink>
            <RouterLink class="nav-item nav-link" to="/horoscope">Daily horoscope</RouterLink>
            <RouterLink class="nav-item nav-link" to="/love">Love Compatibility</RouterLink>
            <RouterLink class="nav-item nav-link" to="/about">About</RouterLink>
      </div>
    </div>
  </nav> 
</div>
   
<hr class="hr">
  <RouterView />
  <div class="blank-space"></div>
  <footerSite/>

</template>

<style>

@import url("https://use.typekit.net/vht2gko.css");

html{
  scroll-behavior: smooth;
}

h3,p,h1{
  color: var(--white);
}

.blank-space1{
  height:80px;
}

.blank-space2{
  height:30px;
}

.blank-space3{
  height:10px;
}

.navbar-brand{
width: 45px;
height: 45px;
}

.nav-link{
  font-family: Quasimoda, sans-serif;
  color: var(--white);
  font-size: 20px;

}

</style>

<script>

import footerSite from '@/components/footerSite.vue'

    export default {
        components:{
            footerSite,
        }
    }

</script>

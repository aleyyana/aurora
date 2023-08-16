<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>

<div class="container">
    <nav class="navbar navbar-expand-lg  justify-content-center align-item-flex">
      <div class="container-fluid">

        <RouterLink to="/"><img src="../src/assets/img/logo_1.png" alt="logo" class="logo navbar-brand"></RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
        <span class="navbar-toggler-icon"></span>
        </button>
          <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
              <div class="offcanvas-header">

              </div>
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
    </nav>
  </div> -->
  
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

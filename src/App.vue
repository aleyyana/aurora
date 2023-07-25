<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <div class="container-fluid">
    <nav class="navbar navbar-expand-xl justify-content-center align-item-flex">
        <ul class="nav navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link active pr-5" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link pr-5" to="/horoscope">Daily horoscope</RouterLink>
          </li>
            <RouterLink to="/"><img src="../src/assets/img/logo_1.png" alt="logo" class="logo navbar-brand"></RouterLink>
          <li class="nav-item">
            <RouterLink class="nav-link pr-5" to="/love">Love Compatibility</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link pr-5" to="/about">About</RouterLink>
          </li>
        </ul>
    </nav>
  </div>
  
<hr>
  <RouterView />
  <div class="blank-space"></div>
  <footerSite/>
</template>

<style>

@import url("https://use.typekit.net/vht2gko.css");



.navbar-brand{
width: 45px;
height: 45px;
}

.nav-link{
  font-family: Lust-sans, sans-serif;
  color: var(--white);
  font-size: 25px;

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

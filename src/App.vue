<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <RouterLink to="/"><img src="../src/assets/img/logo_1.png" alt="logo" class="logo navbar-brand"></RouterLink>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="navbar-nav mr-auto">
                <RouterLink class="nav-item nav-link" to="/">Home</RouterLink>
                <RouterLink class="nav-item nav-link" to="/horoscope">Your Horoscope</RouterLink>
                <!-- <RouterLink class="nav-item nav-link" to="/love">Compatibility</RouterLink> -->
                <RouterLink class="nav-item nav-link" to="/about">About</RouterLink>
          </div>
        </div>
      </nav> 
    </div>
      
    <hr class="hr">
<RouterView /> 


      <div class="blank-space"></div>
      <footerSite/> -->

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

.navbar{
  background-color: black;
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

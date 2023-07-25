<script setup>
import { RouterLink, RouterView } from 'vue-router';


</script>

<template>

<div class="container-fluid">
  <nav class="navbar navbar-expand-xl">
    <RouterLink to="/"><img src="../src/assets/img/logo_1.png" alt="logo" class="logo navbar-brand"></RouterLink>
    <div class="" id="n">
      <ul class="navbar-nav">
        <li class="nav-item active menu-links">
          <RouterLink class="nav-link"  to="/">Home</RouterLink>
        </li>
        <li class="nav-item menu-links">
          <RouterLink class="nav-link" to ="/horoscope">Daily horoscope</RouterLink>
        </li>
        <li class="nav-item menu-links">
          <RouterLink class="nav-link" to="/about">About</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</div>

<hr>
  <RouterView />
  <div class="blank-space"></div>
  <footerSite/>
</template>

<style>

@import url("https://use.typekit.net/vht2gko.css");

*{
  background-image: url(../src/assets/img/jose-duarte-ma48HHDJCXw-unsplash.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

p, a, input, h1, label{
  color:var(--white-base);
}

p, input{
  font-size: var(--content-size);
  font-family: Quasimoda, sans-serif;
}

a, h3, h4{
  font-size:var(--undertitle-size);
}

h1, h2, h3, h4, h5{
  color:var(--white-base);
  font-family: Lust-sans, sans-serif;
}



h2{
  font-size: var(--title-size);
} 

.logo{
  display: block;
  margin: 0 auto 2rem;
  width:3vw;
}

.menu-links{
  font-family: Lust-sans, sans-serif;
}


.blank-space{
    height: 200px;
}

.primary{
  color:var(--white-base);
  background: var(--accent-color);
  border-radius: 20px;
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

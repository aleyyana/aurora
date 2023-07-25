<template>
  <br>
    <hr>
    <br>
   <div class="container">
    <nav class="nav">
      <li class="nav-item menu-links">
        <RouterLink to="/" ><img src="../assets/img/logo_2.png" alt="logo" class="img"></RouterLink>
      </li>
      <li class="nav-item menu-links">
            <RouterLink class="nav-link footer-links"  to="/">Home</RouterLink>
          </li>
      <li class="nav-item menu-links">
        <RouterLink class="nav-link footer-links" to ="/horoscope">Daily horoscope</RouterLink>
      </li>
      <li class="nav-item menu-links">
        <RouterLink class="nav-link footer-links" to="/love">Compatibility</RouterLink>
      </li>
      <li class="nav-item menu-links">
        <RouterLink class="nav-link footer-links" to="/about">About</RouterLink>
      </li>
    </nav>
    <h5 class="text-center"> © Anne-Sophie El Sayyed</h5>
   </div>
</template>

<style scoped>
h5{
    font-family: Quasimoda, sans-serif;
}

.footer-links{
    font-size: 18px;
    color:var(--main-color);
    font-family: Quasimoda, sans-serif;
}
img{
    width:45px;
    height:45px;
}
</style>
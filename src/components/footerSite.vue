<template>
<hr>
   <div class="container-fluid background-footer">
  <div class="content"></div>
  <footer class="row footer">

    <div class="links col col-xs-12 col-sm-3 col-sm-pull-6">
      <RouterLink class="footer-links nav"  to="/">Home</RouterLink>
      <RouterLink class="footer-links nav" to="/horoscope">Your Horoscope</RouterLink>
    </div>
        <div class="copyright col-xs-12 col-sm-3 col-sm-pull-6">
      <p> &copy; Anne-Sophie El Sayyed </p>
    </div>
    
    <div class="impressum col-xs-12 col-sm-3 col-sm-pull-6">
      <RouterLink to="/" ><img src="../assets/img/logo_2.png" alt="logo" class="img"></RouterLink>
      <p>Aurora</p>
    </div>
  </footer>
</div>
</template>

<style scoped>

h5{
    font-family: Quasimoda, sans-serif;
}

img{
height: 8vh;
}

.footer{
  align-items: center;
  justify-content: center;
  background-color: var(--black-background);
}

.footer-links{
  color:var(--white);
}

.copyright,  .impressum, .links
{
  text-align: center;
  font-family: Quasimoda, sans-serif;
}

</style>
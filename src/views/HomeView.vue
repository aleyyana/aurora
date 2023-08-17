<script setup>

</script>
<template>
  <div class="container-fluid">
      <div class="main-title">
        <h1> {{ title }}</h1>
        <div class="blank-space3"></div>
        <h3 class="quote">Look to the moon and stars to find the answers that lie within you
          <br>
        </h3>
      </div>
      <div class="center-circle"> 
        <img class="main-image" src="../assets/img/circle.png" alt=""> 
      </div> 

      <div class="blank-space3"></div>

      <div class="row">
      <div class="col">
        <p>Do you want to know your daily horoscope ?</p>
        <button></button>
      </div>
      <div class="col">
        <p class="compat_text">test your Compatibility with friends & lovers here !</p>
        <button></button>
      </div>
    </div>
  </div>



  
</template>

<style scoped>

h1{
  font-family: Lust-sans, sans-serif;
  text-align: center;
  font-size: var(--header-size);
  color:var(--white)
}

.center-circle{
  display: flex;
  justify-content: center;
  height:auto;
  max-width: 100%;
}

.main-image{
  height: 400px;
}

.quote{
  text-align: center;
  font-size: var(--quote-size);
  color:var(--white);
  font-family: Quasimoda, sans-serif;

}

.compat_text{
  text-align: end;
}

</style>

<script>  
   export default {
    data(){
      return {
        title: "Let's touch the stars"
      }
    } ,
      name: "HomePage",
      components:{


      },
      methods: {
    },
};

</script>

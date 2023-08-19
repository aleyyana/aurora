<script setup>

</script>
<template>
  <div class="container">
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
      <div class="col text-center">
        <h3>Your Daily Horoscope</h3>
        <p class="">Do you want to know your daily horoscope ? You can find your sign here,<br>
        if you don't know it yet. 
        Then you can see how your day will be. 
        </p>
        <RouterLink class="btn btn-light" to="/horoscope">Check it out !</RouterLink>
      </div>
      <div class="col text-center">
        <h3>About us and astrology</h3>
        <p class="">It's important to know how your sign is read. <br>
          And also the point of this website, the meaning of it</p>
        <RouterLink class="btn btn-light" to="/about">More info</RouterLink>
      </div>
    </div>
  </div>

</template>

<style scoped>


.btn{
  background-color: var(--accent-color);
  border-radius: 25px;
  color:var(--white);
}

.center-circle{
  display: flex;
  justify-content: center;
  max-height: 100%;
  max-width: 100%;
}

.main-image{
  height:50%;
  max-width: 100%;
}


.quote{
  text-align: center;
  font-size: var(--quote-size);
  color:var(--white);
  font-family: Quasimoda, sans-serif;

}


</style>

<script>  
   export default {
    data(){
      return {
        title: "Let's touch the stars",
        data: {}
      }
    } ,
      name: "HomePage",
      components:{


      },
      methods: { 
    },

        
    };

</script>

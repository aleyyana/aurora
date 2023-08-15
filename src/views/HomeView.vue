<script setup>

</script>
<template>
  <div class="container-fluid">
      <div class="main-title">
        <h1> {{ title }}</h1>
        <div class="blank-space3"></div>
        <h4 class="quote">Astrology is like gravity. You don't have to believe in it for it to be working in your life.
          <br>
          <span class="author">ZOLAR</span>
        </h4>
      </div>
      <div class="center-circle"> 
        <img class="main-image" src="../assets/img/circle.png" alt=""> 
      </div> 

      <div class="blank-space3"></div>

      <div class="row">
      <div class="col">
        <p>Do you want to know your daily horoscope ? You can check it out here !</p>
      </div>
      <div class="col">
        <p class="compat_text">test your Compatibility with friends & lovers here !</p>
      </div>
    </div>

      <!-- <div class="center-content" id="anchor1"><a href="#anchor-content">Jump to section 2</a>
      </div> -->
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
  height: 400px;
}

.quote{
  text-align: center;
  font-size: 20px;
  color:var(--white);

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

<script setup>

</script>
<template>
  <div class="container-fluid">
      <div class="main-title">
        <h1> {{ title }}</h1>
        <!-- <div class="blank-space2"></div> -->
        <h4 class="quote">Astrology is like gravity. You don't have to believe in it for it to be working in your life.
          <br>
          <span class="author">ZOLAR</span>
        </h4>
      </div>
      <!-- <div class="blank-space2"></div> -->
      <div class="center-circle"> 
        <img class="main-image" src="../assets/img/circle.png" alt=""> 
      </div> 

      <!-- <div class="blank-space2"></div> -->

      <div class="center-content" id="anchor1"><a href="#anchor-content">Jump to section 2</a></div>
  </div>
  <!-- <div class="blank-space2"></div> -->
  
</template>

<style scoped>

h1{
  font-family: Lust-sans, sans-serif;
  text-align: center;
  font-size: var(--header-size);
}

.center-circle{
  display: flex;
  justify-content: center;
  height: 500px;
}

.center-content{
  display: flex;
  justify-content: center;
}

.quote{
  text-align: center;
  font-size: 20px;

}

.text1{
  color:var(--main-color);
}


.btn-center{
  display: flex;
  justify-content: center;
}

.btn{
  background: var(--secondary-color) 0% 0% no-repeat padding-box;
  border-radius: 43px;
  height:38px;
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

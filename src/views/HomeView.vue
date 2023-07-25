<script setup>

</script>
<template>
  <div class="container-fluid">
      <div class="main-title">
        <h1> {{ title }}</h1>
      </div>
      <div class="center" width="20px">  
          <img class="main-image" src="../assets/img/circle.png" alt="">
      </div>

      <div class="row">
        <div class="col btn-center">
          <RouterLink class="btn" to="/horoscope">Go to your daily horoscope</RouterLink>
        </div>
        <div class="col btn-center">
          <RouterLink class="btn" to="/horoscope">Check compatibility with others</RouterLink>
        </div>
      </div>
  </div>
</template>

<style scoped>

h1{
  font-family: Lust-sans, sans-serif;
  text-align: center;
  font-size: var(--header-size);
}

.center{
  display: flex;
  justify-content: center;
  size: 50px;
}

.btn-center{
  display: flex;
  justify-content: center;
}

.btn{
  width: 280px;
  height: 50px;
  background: #A1C084 0% 0% no-repeat padding-box;
  border-radius: 43px;
  opacity: 1; 
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

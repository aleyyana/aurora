<script setup>

</script>
<template>
  <div class="container-fluid">
      <div class="main-title">
        <h1> {{ title }}</h1>
      </div>
      <div class="center">  
          <img class="main-image" src="../assets/img/circle.png" alt="">
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

<template>

  <div class="container">
    <div class="main-title">
      <h1>{{ title }}</h1>
    </div>
    <div class="row">
      <div class="col">
        <p></p>
      </div>
      <div class="col">
        <img src="../assets/img/logo_2.png" alt="">
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>

  export default{
    data(){
      return{
        title : "About Aurora"
      }
      
    }

  };
</script>

<style scoped>

h1{
  font-family: Lust-sans, sans-serif;
  text-align: center;
  font-size: var(--header-size);
}

</style>

<template>

<section class="quote container">
  <div class="img"></div>
    <div class="quote-body">
      <h5>{{ quote.text }}</h5>
    </div>
    <div class="quote-author">
      <p>{{ quote.author === null ? 'Unknown' : quote.author }}</p>
    </div>
  </section>
    
</template>

<script>


export default{

  data(){
    return{

    }
  },
  methods : {
  },

  props: ["quote"],
}

</script>

<style scoped>

</style>
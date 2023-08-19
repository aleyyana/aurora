<template>

<section class="quote">
    <div class="quote-body">
      {{ quote.text }}
    </div>
    <div class="quote-author">
      {{ quote.author === null ? 'Unknown' : quote.author }}
    </div>
  </section>
    
</template>

<script>


export default{

  data(){
    return{
      data:{}
    }
  },
  methods : {

  },

  props: ["quote"],
}

</script>

<style scoped>

</style>
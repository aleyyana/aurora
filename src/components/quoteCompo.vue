<template>

<section class="quote container">
  <div class="img"></div>
    <div class="quote-body">
      <h5>{{ quote.text }}</h5>
    </div>
    <div class="quote-author">
      <p class="author">{{ quote.author === null ? 'Unknown' : quote.author }}</p>
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

h5{
  font-family: Quasimoda,sans-serif;
}

.author{
  font-size:var(--author-size)
}

</style>
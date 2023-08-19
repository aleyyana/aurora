<template>

    <div class="container birthday">
        <h3>Enter your birthday</h3>
        <p>Month:<input type="number" id="month" min="1" max="12" ></p>
        <p> Day:<input type="number" id="day" min="1" max="31"></p> 
        <a id="animated" v-on:click="zodiac"  class="button">Find your zodiac sign! </a>
        <img id="photo" src="" alt="">
        <p id= "space"> Your zodiac sign is <span id="output"></span> </p>  
        <p id="characteristic"></p>
    </div>

    <div class="blank-space2"></div>

    <div class="container"> 
      <!-- title -->
        <div class="col-12 text-center">
            <h1>The Daily horoscope</h1> 
        </div>
        <!-- gallery  -->
        <div class="row">
          <!-- check astro  -->
          <div class="col">
              <div class="row grid gap-2">
                  <div class="col-xs text-center">
                    <br>
                  <img src="../assets/img/aquarius.png">
                    <br/>
                  <button class="btn btn-light"  @click="getQuote" ref="" > Aquarius</button>
                  </div>
                  <div class="col-xs text-center">
                    <br>
                  <img src="../assets/img/pisces.png">
                    <br/>
                  <button class="btn btn-light"  @click="getQuote" ref="PiscestnToggle" > Pisces</button>
                  </div>
                  <div class="col-xs text-center">
                    <br>
                  <img src="../assets/img/aries.png">
                    <br/>
                  <button class="btn btn-light"  @click="getQuote" ref="AriesbtnToggle" > Aries</button>
                  </div>
              </div>
              <div class="row my-2">
                  <div class="col-xs text-center">
                    <br>
                  <img src="../assets/img/taurus.png">
                    <br/>
                  <button class="btn btn-light"  @click="getQuote" ref="TaurusbtnToggle" > Taurus </button>
                  </div>
                  <div class="col-xs text-center">
  >
                  <br>
                  <img src="../assets/img/gemini.png">
                <br/>
                  <button class="btn btn-light"  @click="toggleGemini" ref="GeminibtnToggle" > Gemini </button>
                </div>
                <div class="col-xs text-center">
  >
                  <br>
                  <img src="../assets/img/cancer.png">
                <br/>
                  <button class="btn btn-light"  @click="toggleCancer" ref="CancerbtnToggle" >Cancer</button>
                </div>
              </div>
              <div class="row">
                <div class="col-xs text-center">
                  <br>
                  <img src="../assets/img/leo.png">
                <br/>
                  <button class="btn btn-light"  @click="getQuote" ref="LeobtnToggle">Leo</button>
                </div>
                <div class="col-xs text-center">
>
                  <br>
                  <img src="../assets/img/virgo.png">
                <br/>
                  <button class="btn btn-light"  @click="getQuote" ref="VirgobtnToggle">Virgo</button>
                </div>
                <div class="col-xs text-center">
>
                  <br>
                  <img class="pb-2" src="../assets/img/libra.png">
                <br/>
                  <button class="btn btn-light"  @click="getQuote" ref="LibrabtnToggle">Libra</button>
                </div>
              </div>
              <div class="row">
                <div class="col-xs text-center">
                  <br>
                  <img src="../assets/img/scorpio.png">
                <br/>
                  <button class="btn btn-light"  @click="getQuote" ref="ScorpiobtnToggle">Scorpio</button>
                </div>
                <div class="col-xs text-center">
                  <br>
                  <img class="pb-2" src="../assets/img/sagittarius.png">
                <br>
                  <button class="btn btn-light"  @click="getQuote" ref="SagitbtnToggle">Sagittarius</button>
                </div>
                <div class="col-xs text-center">
                  <br>
                  <img src="../assets/img/capricorn.png">
                <br>
                  <button class="btn btn-light"  @click="getQuote" ref="CapribtnToggle">Capricorn</button>
                </div>
              </div>
          </div>
          <!-- result astro  -->
          <div class="col">

            <QuoteComponent :quote="quote" />
            <div class="button-container">
            </div>
          </div>
        </div>
    </div>
</template>

<script>

import QuoteComponent from '../components/QuoteComponent.vue';

export default {
  data(){
    return{
      quote:{
        text:"",
        author: "",
        button: {
          text:'Today'
        },
        quotes: []
      }
    }
  },

  components: {
    QuoteComponent
  },

  created(){
    this.getQuote();
  },

  methods:{
    async getQuote() {
      const data = await fetch("https://type.fit/api/quotes").then(res => res.json());
      const randomQuote = Math.floor(Math.random() * data.length);
      if (this.quote.content) {
        this.quotes = [...this.quotes, this.quote];
      }

      this.quote = {
        text: data[randomQuote].text,
        author: data[randomQuote].author
      };

    }
  }
}





</script>

<style scoped>

.birthday{
  display: center;
  justify-self:center;
}

.btn{
  border-radius: 25px;
}

</style>
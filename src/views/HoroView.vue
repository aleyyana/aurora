<template>

    <div class="container birthday">
        <h1>Enter your birthday</h1>
        <p> Day:<input type="number" id="day" min="1" max="31" class="btn btn-light" ></p> 
        <p>Month:<input type="number" id="month" min="1" max="12" class="btn btn-light" ></p>
        <a id="animated" v-on:click="zodiac"  class="button">Find your zodiac sign! </a>
        <img id="photo" src="" alt="">
        <p class="answer" id= "space"> Your zodiac sign is <span id="output"></span> </p>  
        <p id="characteristic"></p>
    </div>

    <div class="blank-space2"></div>

    <div class="container-fluid astro_background"> 
      <!-- title -->
        <div class="col-12 text-center">
            <h1>The Daily horoscope quote</h1> 
        </div>
        <!-- gallery  -->
        <div class="row astro_elements gap-4">
          <!-- check astro  -->
          <div class="col ">
              <div class="row">
                  <div class="col-4 col-xs-4 text-center">
                    <br>
                  <img src="../assets/img/aquarius.png">
                    <br/>
                  <a class="signs" v-on:click="getQuote">Aquarius</a>
                  </div>
                  <div class="col-4 col-xs-4 text-center">
                    <br>
                  <img src="../assets/img/pisces.png">
                    <br/>
                  <a class="signs" v-on:click="getQuote">Pisces</a>
                  </div>
                  <div class="col-4 col-xs-4 text-center">
                    <br>
                  <img src="../assets/img/aries.png">
                    <br/>
                  <a class="signs" v-on:click="getQuote">Aries</a>
                  </div>
              </div>
              <div class="row my-2">
                  <div class="col-4 col-xs-4 text-center">
                    <br>
                  <img src="../assets/img/taurus.png">
                    <br/>
                  <a class="signs" v-on:click="getQuote">Taurus</a>
                  </div>
                  <div class="col-4 col-xs-4 text-center">
  
                  <br>
                  <img src="../assets/img/gemini.png">
                <br/>
                  <a class="signs" v-on:click="getQuote">Gemini</a>
                </div>
                <div class="col-4 col-xs-4 text-center">
                  <br>
                  <img src="../assets/img/cancer.png">
                <br/>
                  <a class="signs" v-on:click="getQuote">Cancer</a>
                </div>
              </div>
              <div class="row">
                <div class="col-4 col-xs-4 text-center">
                  <br>
                  <img src="../assets/img/leo.png">
                <br/>
                  <a class="signs" v-on:click="getQuote">Leo</a>
                </div>
                <div class="col-4 col-xs-4 text-center">
>
                  <br>
                  <img src="../assets/img/virgo.png">
                <br/>
                  <a class="signs" v-on:click="getQuote">Virgo</a>
                </div>
                <div class="col-4 col-xs-4 text-center">
>
                  <br>
                  <img class="pb-2" src="../assets/img/libra.png">
                <br/>
                  <a class="signs" v-on:click="getQuote">Libra</a>
                </div>
              </div>
              <div class="row">
                <div class="col-4 col-xs-4 text-center">
                  <br>
                  <img src="../assets/img/scorpio.png">
                <br/>
                  <a class="signs" v-on:click="getQuote">Scorpio</a>
                </div>
                <div class="col-4 col-xs-4 text-center">
                  <br>
                  <img class="pb-2" src="../assets/img/sagittarius.png">
                <br>
                  <a class="signs" v-on:click="getQuote">Sagittarius </a>
                </div>
                <div class="col-4 col-xs-4 text-center">
                  <br>
                  <img src="../assets/img/capricorn.png">
                <br>
                  <a class="signs" v-on:click="getQuote"> Capricorn </a>
                </div>
              </div>
          </div>
          <!-- result astro  -->
          <div class="col-5">

            <QuoteComponent :quote="quote" />
          </div>
        </div>
    </div>
</template>

<script>

import QuoteComponent from '../components/quoteCompo.vue';

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
      },
      
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

    },
    zodiac : function zodiac(){
    var birthmonth = document.getElementById("month").value;
    var birthday = document.getElementById("day").value;
    var result = " unknown because you didn't put a valid date.";


    if (birthmonth == 1&& birthday >= 20 || birthmonth == 2 && birthday <= 18
    ){
        result = ("Aquarius");
     document.getElementById("photo").innerHTML="<img src='../assets/img/hands_aquarius.png'width=20%>";
    document.getElementById("characteristic").innerHTML="Aquarians are extremely vulnerable and sensitive. Although you may often find them being surrounded by many friends but in reality they rarely have close friends and acquaintances. Aquarius is a universal sign which makes them public people. Hence Aquarians are often associated with clubs, organizations and forums and enthusiastically participate in intellectual discussions. Aquarians are great communicators as long as they are within their mental realm.";
  
    }

    if (birthmonth == 2&& birthday >= 19 || birthmonth == 3&& birthday <= 20){
       result = ("Pisces");
       document.getElementById("photo").innerHTML="<img src='../assets/img/hands_pisces.png'width=20%>";
      document.getElementById("characteristic").innerHTML="Pisceans live in their imaginary world that barely has a connection with the reality. They love to look at the world through a rosy window. When challenged by reality, Pisceans have the tendency to retreat into their world of imagination.";
      
    }
   if (birthmonth == 3&& birthday >= 21 || birthmonth == 4 && birthday <= 19){
       result = ("Aries");
      document.getElementById("photo").innerHTML="<img src='../assets/img/hands_aries.png'width=20%>";
     document.getElementById("characteristic").innerHTML="Aries demonstrate strong personality. They have strong leadership qualities and honest and straightforward. Aries often have strong determination and can’t be deterred by failures.Aries are always eager for action. They take up to leadership spontaneously. But they don’t judge the pros and cons of a situation before acting. This also makes them vulnerable.";
   }
  
    if (birthmonth == 4&& birthday >= 20|| birthmonth == 5 && birthday <= 20){
        result = ("Taurus");
       document.getElementById("photo").innerHTML="<img src='../assets/img/hands_taurus.png'width=20%>";
       document.getElementById("characteristic").innerHTML="Taureans are noted for their determination and zeal. It is not easy to distract a Taurian from his goal once he has set his target. He would stay focused on his target and would continuously strive to achieve it.Taureans attach high value to simplicity and functionality. They often live a life that is simple and devoid of luxury.";
      
    }
  
    if (birthmonth == 5&& birthday >= 21 || birthmonth == 6 && birthday <= 20
     ){
        result = ("Gemini");
       document.getElementById("photo").innerHTML="<img src='../assets/img/hands_gemini.png'width=20%>";
      document.getElementById("characteristic").innerHTML="Geminis are full of duality. They always look to a situation from dual perspective. Geminis are characterized by inconstancy and dual nature. Geminis therefore always stay confused about their feelings.Geminis however are strong communicators and express good control over language. They are often found to have knowledge over several languages.";
     
    }
  
    if (birthmonth == 6&& birthday >= 21 || birthmonth == 7&& birthday <= 22){
        result = ("Cancer");
       document.getElementById("photo").innerHTML="<img src='../assets/img/hands_cancer.png'width=20%>";
      document.getElementById("characteristic").innerHTML="Cancerians are emotional. Their lives are often inflicted with mood shifts. You can find a Canerian in different moods even during a day.The true emotion of Cancer however is hidden behind their composure. But they are soft creatures and can be hurt easily by unkind words.People of the Cancer zodiac sign can be prone to depression and other mental issues. However, cancers are great family people and enjoy big families around them.";
      
    }
    if (birthmonth == 7&& birthday >= 23 || birthmonth == 8 && birthday <= 22){
        result = ("Leo");
       document.getElementById("photo").innerHTML="<img src='../assets/img/hands_leo.png'width=20%>";
            document.getElementById("characteristic").innerHTML="Leos are warm spirited. They are full of energy and always eager to jump into action. Leos crave for recognition and admiration. Leos always love to be at the centre of attraction. They strive to reach to the top in whatever they do. Leos always love to be surrounded with large crowd and admirers. However, they are often unkind to criticism and don’t take the words of critics lightly.Leos are very ambitious and choose their acquaintances carefully. They aspire for social recognition.";
      
    }
    if (birthmonth == 8 && birthday >= 23 || birthmonth == 9 && birthday <= 22){
        result = ("Virgo");
       document.getElementById("photo").innerHTML="<img src='../assets/img/hands_virgo.png'width=20%>";
        document.getElementById("characteristic").innerHTML="Virgos have a keen sense of good and bad and for that they are highly discriminating. They have an intuitive sense to identify wrong motives in people. Hence, Virgos exercise extreme caution in what they do.The virgin defines purity and therefore they are endowed with the ability to distinguish the good from the bad. Hence, Virgos are also cleanliness freaks. Despite their intelligence Virgos often remain confused about the decisions they make in their life. Also, you will not find Virgos teeming with activities.";
    }
    if (birthmonth == 9&& birthday >= 23 || birthmonth == 10&& birthday <= 22){
      result = ("Libra");
       document.getElementById("photo").innerHTML="<img src='../assets/img/hands_libra.png'width=20%>";
        document.getElementById("characteristic").innerHTML="Libra is an active sign and members born under the sign are endowed with high energy. But Librans also tend to run out of their energy soon.The Libra is the ‘balance’ and members of this sign have a very balanced mind. They can be found in settling disputes often. Librans always try to maintain harmony and balance. They are also very level headed and have a keen sense for justice. Therefore, their suggestions are often highly sought after by their friends and kins.Librans are two faceted characters. They both have the cheerfulness and darkness in them. Librans have phases of heightened activities but they can easily slip into a phases of complete inactivity and apathy as well.";
    }
    if (birthmonth == 10 && birthday >= 23|| birthmonth == 11 && birthday <= 21){
       result = ("Scorpio");
       document.getElementById("photo").innerHTML="<img src='../assets/img/hands_scorpio.png'width=20%>";
        document.getElementById("characteristic").innerHTML="Scorpions are most diverse in nature and therefore present the most interesting study. Scorpios hold grudge and would wait patiently for the right moment to strike. They are not likely to forget any act of betrayal or treachery. For Scorpios what is implied is more fascinating than the obvious.Scorpios are often described as egoists. However, some of the positive traits of Scorpios are- diplomacy, intuition, intelligence, engaging, resolute, spirituality and sensitivity.";
    }
    if (birthmonth == 11 && birthday >= 22 || birthmonth == 12 && birthday <= 21){
        result = ("Sagittarius");
       document.getElementById("photo").innerHTML="<img src='../assets/img/hands_sagittarius.png'width=20%>";
        document.getElementById("characteristic").innerHTML="Sagittarians are the incurable optimists. They are always looking at the positive side of a thing. Their optimism can’t be dampened by hardships or negative results.Sagittarians often are outdoor people. They will take interest in all sorts of sports and outdoor activities. They are also adventures in nature. Although they are true to their faults but can also turn completely deaf to criticism and turn down suggestions.";
    }
  
  if(birthmonth == 12 && birthday >= 22 || birthmonth == 1 && birthday <= 19){
 
        result = ("Capricorn");
     document.getElementById("photo").innerHTML="<img src='../assets/img/hands_capricorn.png'width=20%>";
     document.getElementById("characteristic").innerHTML="Members of this sign has an insatiable desire to climb higher and during this course they can also become selfish and might not hesitate to sacrifice other’s interests in fulfilling their goals.Capricorns may seem risk averse but in reality they carefully plan all their moves ahead and rehearse them to perfection.";
    }else if (birthmonth>12||birthday>31){
       alert("Please enter an accurate date ! ");
    }
 document.getElementById("output").innerHTML= result;
    },
  }
}





</script>

<style scoped>

.astro_background{
  background-color: black;
}

a, .signs{
  color: var(--accent-color);
}

.astro_elements{
max-width: 100%;
 height:auto;
}

.birthday{
  display: center;
  justify-self:center;
}

.btn{
  border-radius: 25px;
}



</style>
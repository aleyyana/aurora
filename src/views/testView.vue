
<template>
    <div class="container mb-3">
        <div class="col-12 text-center">
            <h1>The Daily horoscope</h1> 
        </div>
        <div class="blank-space2"></div>
    </div>
  
  
  <div id="app" class="container">
        <div class="carousel" id="carousel">
              <div class="row">
                  <div class="col text-center mb-2">
                    <h6 class="">Aquarius</h6>
                    <br>
                    <img src="../assets/img/aquarius.png">
                  <br/>
                    <button class="secondary px-4 py-2 mt-2"  @click="toggleAquarius" ref="AquabtnToggle" >{{ button.text }}</button>
  
                  </div>
                  <div class="col text-center mb-3">
                    <h6 class="">Pisces</h6>
                    <br>
                    <img src="../assets/img/pisces.png">
                  <br/>
                    <button class="secondary px-4 py-2 mt-2"  @click="togglePisces" ref="PiscesbtnToggle" >{{button.text}}</button>
                   </div>
                  <div class="col text-center mb-3">
                    <h6 class="">Aries</h6>
                    <br>
                    <img src="../assets/img/aries.png">
                  <br/>
                    <button class="secondary px-4 py-2 mt-2" px-4 py-2 m-1 @click="toggleAries" ref="AriesbtnToggle" >{{button.text}}</button>
                  </div>
                  <div class="col text-center mb-3">
                    <h6 class="">Taurus</h6>
                    <br>
                    <img src="../assets/img/taurus.png">
                  <br/>
                    <button class="secondary px-4 py-2 mt-2"  @click="toggleTaurus" ref="TaurusbtnToggle" >{{button.text}}</button>
                  </div>
                  <div class="col text-center mb-3">
                    <h6 class="">Gemini</h6>
                    <br>
                    <img src="../assets/img/gemini.png">
                  <br/>
                    <button class="secondary px-4 py-2 mt-2"  @click="toggleGemini" ref="GeminibtnToggle" >{{button.text}}</button>
                  </div>
                  <div class="col text-center mb-3">
                    <h6 class="">Cancer</h6>
                    <br>
                    <img src="../assets/img/cancer.png">
                  <br/>
                    <button class="secondary px-4 py-2 mt-2"  @click="toggleCancer" ref="CancerbtnToggle" >{{button.text}}</button>
                  </div>
              </div>
              <div class="row mt-5">
                  <div class="col text-center mb-3">
                    <h6 class="">Leo</h6>
                    <br>
                    <img src="../assets/img/leo.png">
                  <br/>
                    <button class="secondary px-4 py-2 mt-2"  @click="toggleLeo" ref="LeobtnToggle">{{button.text}}</button>
                  </div>
                  <div class="col text-center mb-3">
                    <h6 class="">Virgo</h6>
                    <br>
                    <img src="../assets/img/virgo.png">
                  <br/>
                    <button class="secondary px-4 py-2 mt-2"  @click="toggleVirgo" ref="VirgobtnToggle">{{button.text}}</button>
                  </div>
                  <div class="col text-center mb-3">
                    <h6 class="">Libra</h6>
                    <br>
                    <img class="pb-2" src="../assets/img/libra.png">
                  <br/>
                    <button class="secondary px-4 py-2 mt-2"  @click="toggleLibra" ref="LibrabtnToggle">{{button.text}}</button>
                  </div>
                  <div class="col text-center mb-3">
                    <h6 class="">Scorpio</h6>
                    <br>
                    <img src="../assets/img/scorpio.png">
                  <br/>
                    <button class="secondary px-4 py-2 mt-2"  @click="toggleScorpio" ref="ScorpiobtnToggle">{{button.text}}</button>
                  </div>
                  <div class="col text-center mb-3">
                    <h6 class="">Sagittarius</h6>
                    <br>
                    <img class="pb-2" src="../assets/img/sagittarius.png">
                  <br>
                    <button class="secondary px-4 py-2 mt-2"  @click="toggleSagittarius" ref="SagitbtnToggle">{{button.text}}</button>
                  </div>
                  <div class="col text-center mb-3">
                    <h6 class="">Capricorn</h6>
                    <br>
                    <img src="../assets/img/capricorn.png">
                  <br>
                    <button class="secondary px-4 py-2 mt-2"  @click="toggleCapricorn" ref="CapribtnToggle">{{button.text}}</button>
                  </div>
              </div>
        </div>
    </div>


    <nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Offcanvas dark navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
  
    <div style="width:100%;margin:20px auto;height:400px">
    </div>
  
  </template>
  
  <script>
      import AquariusSign from '../components/AquariusSign.vue';   
      import PiscesSign from '../components/PiscesSign.vue';   
      import AriesSign from '../components/AriesSign.vue';
      import TaurusSign from '../components/TaurusSign.vue';
      import GeminiSign from '../components/GeminiSign.vue';   
      import CancerSign from '../components/CancerSign.vue';
      import LeoSign from '../components/LeoSign.vue';   
      import VirgoSign from '../components/VirgoSign.vue';
      import LibraSign from '../components/LibraSign.vue';   
      import ScorpioSign from '../components/ScorpioSign.vue';
      import SagittariusSign from '../components/SagittariusSign.vue';   
      import CapricornSign from '../components/CapricornSign.vue';
  
  export default ({
    name: "App",
    components: {
      AquariusSign,
      PiscesSign,
      AriesSign,
      TaurusSign,
      GeminiSign,
      CancerSign, 
      LeoSign,
      VirgoSign,
      LibraSign,
      ScorpioSign,
      SagittariusSign,
      CapricornSign,
  
    },
    data() {
      return {
        showAquarius: false,
        showPisces: false,
        showAries: false,
        showTaurus: false,
        showGemini: false,
        showCancer: false,
        showLeo:false,
        showVirgo:false,
        showLibra:false,
        showScorpio:false,
        showSagittarius:false,
        showCapricorn:false,
        button : {
          text: 'Check it for today !'
        }
      };
    },
    methods: {
      toggleAquarius () {
        this.showAquarius = !this.showAquarius;
        this.$refs.AquabtnToggle.innerText = this.showAquarius?'Hide it':'Check it for today !';
      },
      togglePisces () {
        this.showPisces = !this.showPisces;
        this.$refs.PiscesbtnToggle.innerText = this.showPisces?'Hide it':'Check it for today !';
      },
      toggleAries () {
        this.showAries = !this.showAries;
        this.$refs.AriesbtnToggle.innerText = this.showAries?'Hide it':'Check it for today !';
      },
      toggleTaurus () {
        this.showTaurus = !this.showTaurus;
        this.$refs.TaurusbtnToggle.innerText = this.showTaurus?'Hide it':'Check it for today !';
      },
      toggleGemini () {
        this.showGemini = !this.showGemini;
        this.$refs.GeminibtnToggle.innerText = this.showGemini?'Hide it':'Check it for today !';
      },
      toggleCancer () {
        this.showCancer = !this.showCancer;
        this.$refs.CancerbtnToggle.innerText = this.showCancer?'Hide it':'Check it for today !';
      },
      toggleLeo () {
        this.showLeo = !this.showLeo;
        this.$refs.LeobtnToggle.innerText = this.showLeo?'Hide it':'Check it for today !';
      },
      toggleVirgo () {
        this.showVirgo = !this.showVirgo;
        this.$refs.VirgobtnToggle.innerText = this.showVirgo?'Hide it':'Check it for today !';
      },
      toggleLibra () {
        this.showLibra = !this.showLibra;
        this.$refs.LibrabtnToggle.innerText = this.showLibra?'Hide it':'Check it for today !';
      },
      toggleScorpio () {
        this.showScorpio = !this.showScorpio;
        this.$refs.ScorpiotnToggle.innerText = this.showScorpio?'Hide it':'Check it for today !';
      },
      toggleSagittarius () {
        this.showSagittarius = !this.showSagittarius;
        this.$refs.SagitbtnToggle.innerText = this.showSagittarius?'Hide it':'Check it for today !';
      },
      toggleCapricorn () {
        this.showCapricorn = !this.showCapricorn;
        this.$refs.CapribtnToggle.innerText = this.showCapricorn?'Hide':'Check it for today !';
      },
  
    }
  });
  </script>
  
  <style scoped>
      h1{
          font-size: 80px;
  
      }
  
      .secondary{
        border-radius: 20px;
        border: 1px solid var(--accent-color);
        color: var(--accent-color);
        font-family: Quasimoda, sans-serif;
      }
  
    h6{
      font-style: italic;
      color: var(--secondary-color)
      
    }
  
  
  </style>


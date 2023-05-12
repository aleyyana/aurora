<script setup>

</script>
<template>

  <div id="grid">
    <div class="container">
      <div class="row">
        <div class="col-xs-3 col-md-offset-1 col-md-2">
          <div class="grid-line"></div>
        </div>
        <div class="col-xs-3 col-md-2">
          <div class="grid-line"></div>
        </div>
        <div class="col-xs-3 col-md-2">
          <div class="grid-line"></div>
        </div>
        <div class="col-xs-3 col-md-2">
          <div class="grid-line"></div>
        </div>
        <div class="col-xs-3 col-md-2">
          <div class="grid-line"></div>
        </div>
        <div class="col-xs-3 col-md-2">
          <div class="grid-line"></div>
        </div>
      </div>
    </div>
  </div>

<!-- <div id="app" class="container">

  <div class="kine position-absolute top-50 start-50">
      <kinesis-container class="">
      <h1>Aurora</h1> 
        <kinesis-element :strength="10"> <h1>Let's</h1></kinesis-element>
        <kinesis-element :strength="20"> <h1>Stargaze</h1> </kinesis-element>
      </kinesis-container>
    </div>
 
</div> -->

  <!-- <div class="blank-space"></div>

   <h1 class="main_title">{{title}}</h1> --> -->
</template>

<style scoped>

#grid{
  position:fixed;
  width: 100%;
}

.col-xs-3{
  width:25%;
}

.grid-line{
  border-left-color: var(--secondary-color);
  height: 100vh;
  border-left: 1px solid

}
/* h1{
    font-size: 100px;
}
h3, .quote {
  margin: 40px 0 0;
  text-align: right;
  font-weight: 100;
  color: var(--secondary-color);
  font-family: Quasimoda,sans-serif;
}




h4{
    font-size: 40px;
} */



</style>

<script>  
  import GlitchedWriter from 'vue-glitched-writer'
  import { KinesisContainer, KinesisElement } from "vue-kinesis";

  export default {
  data(){
    return {
      title: "Let's Stargaze"
    }
  } ,
    name: "HomePage",
    components:{
      GlitchedWriter,
      KinesisContainer,
      KinesisElement

    },
    methods: {
    // play() {
    //   this.$refs.videoPlayer.play();
    // },
    // pause() {
    //   this.$refs.videoPlayer.pause();
    // },
    // stop() {
    //   const { videoPlayer } = this.$refs;
    //   videoPlayer.pause();
    //   videoPlayer.currentTime = 0;
    // },
    // setSpeed(speed) {
    //   this.$refs.videoPlayer.playbackRate = speed;
    // },
  },
};

</script>

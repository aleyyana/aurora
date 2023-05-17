<script setup>

</script>
<template>
  <div class="container">
    <h1>{{ title }}</h1>
  </div>
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

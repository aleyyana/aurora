<template>
  
  <div class="container col-12 text-center mt-5">

    <div class="main-title">
      <h1>{{ title }}</h1>
    </div>
    <div class="container video">
      <video height="500" ref="videoPlayer">
          <source
            src="../assets/video/aurora_astro.mp4"
            type="video/mp4"
          />
    </video>

    <div class="text-center">
          <button class="primary btn px-4 py-2 m-1 controls" @click="play">play <i data-feather="play-circle"></i></button>
          <button class="primary btn px-4 py-2 m-1 controls" @click="pause">pause</button>
          <button class="primary btn px-4 py-2 m-1 controls" @click="stop">stop</button>
      </div>
    </div>
        
    </div>
<div class="blank-space2">

</div>
    <div class="container">
      <div class="row">
        <div class="col">
          <h3>About Aurora</h3>
          <p>Aurora is a website about astrology. It's mostly based on the sun sign, as you can see on the video. </p>
        </div>
        <div class="col">
          <img src="../assets/img/logo_2.png" alt="">
        </div>
        <div class="col">
          <h3>About Astrology</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
             when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
             It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
    </div>
</template>

<script>

export default{
  data(){
    return{
      title : "About Aurora"
    }
  },
  methods:{
    play() {
      this.$refs.videoPlayer.play();
      this.$refs.videoPlayer.autoplay();
    },
    pause() {
      this.$refs.videoPlayer.pause();
    },
    stop() {
      const { videoPlayer } = this.$refs;
      videoPlayer.pause();
      videoPlayer.currentTime = 0;
    },
    setSpeed(speed) {
      this.$refs.videoPlayer.playbackRate = speed;
    },
  }
}

</script>

<style scoped>

.video{
  background-color: var(--secondary-color);
  padding: 0;
}

h1{
  font-family: Lust-sans, sans-serif;
  text-align: center;
  font-size: var(--header-size);
  color:var(--white);
}

.controls{
  color:var(--white);
}
</style>
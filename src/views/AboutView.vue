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
    </div>
        <div class="text-center">
          <button class="primary btn px-4 py-2 m-1" @click="play">play <i data-feather="play-circle"></i></button>
          <button class="primary btn px-4 py-2 m-1" @click="pause">pause</button>
          <button class="primary btn px-4 py-2 m-1" @click="stop">stop</button>
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
}

h1{
  font-family: Lust-sans, sans-serif;
  text-align: center;
  font-size: var(--header-size);
  color:var(--white)
}
</style>
<template>
  <div class="container">
      <div class="row">
        <div class="col-sm">
          <h3>About Aurora</h3>
          <p>Aurora is a website about astrology. It's mostly based on the sun sign, as you can see on the video.
            Aurora means "the dawn". Aurora is a natural light display in Earth's sky mainly in high latitude regions.
            It's the main reason why I choose to name my website Aurora. I wanted to have a name that had a link with the sky but not totally related.
            Aurora want its user to have a bit of fun for a short amount of time. Here you can see what quote astrology has for you today
            and you'll be able to check your compatibility with everyone.  </p>
        </div>
        <div class="col-sm">
          <img src="../assets/img/logo_2.png" class="responsive" alt="">
        </div>
        <div class="col-sm">
          <h3>About Astrology</h3>
          <p> <span>"Astrology is a range of divinatory practices, recognized as pseudoscientific since the 18th century".</span>That's the definition
          Wikipedia made about it. But in reality, a lot of people think it's childish. But astrology is made for people who wants to have
          fun and who likes stars, planets & the sky. Astrology is for the dreamers but it welcomes everyone who wants to give it a try. There's no need
          to be afraid of it. </p>
        </div>
      </div>
  </div>
  
  <div class="container col-12 text-center mt-5">

    <div class="subtitle">
      <h3>{{ title }}</h3>
    </div>

    <div class="container-fluid video">
      <video height="500" ref="videoPlayer" class="responsive_video">
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


</template>

<script>

export default{
  data(){
    return{
      title : "Your Sun Sign in video"
    }
  },
  methods:{
    play() {
      this.$refs.videoPlayer.play();
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

.responsive{
  height:auto;
  max-width: 80%;
}

.responsive_video{
  max-width: 80%;
  height: auto;
}


.controls{
  color:var(--white);
}
</style>
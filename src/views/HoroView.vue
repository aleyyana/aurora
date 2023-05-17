<template>
  <!-- Make a frame wrapped slider -->
   <div style="width:100%;margin:20px auto;height:400px">
        <!-- Configuring slider components -->
        <slider ref="slider" :options="options" @slide='slide' @tap='onTap' @init='onInit'>
            <slideritem v-for="(item,index) in pages" :key="index" :style="item.style">{{item.html}}</slideritem>
            <!-- Set loading -->
            <div slot="loading">loading...</div>
        </slider>
   </div>
  </template>
  <script>
  import { slider, slideritem } from 'vue-concise-slider' // import slider components
  export default {
     el: '#app',
     data () {
        return {
          //Image list
          pages:[
            {
            html: 'slider1',
            style: {
              'background': '#1bbc9b'
              }
            },
            {
              html: 'slider2',
              style: {
                'background': '#4bbfc3'
              }
            },
            {
              html: 'slider3',
              style: {
                'background': '#7baabe'
              }
            }
          ],
          //Sliding configuration [obj]
          options: {
            currentPage: 0,
            thresholdDistance: 500,
            thresholdTime: 100,
            autoplay:1000,
            loop:true,
            direction:'vertical',
            loopedSlides:1,
            slidesToScroll:1,
            timingFunction: 'ease',
            speed: 300
          }
        }
      },
      components: {
          slider
      },
      methods: {
        // Listener event
        slide (data) {
          console.log(data)
        },
        onTap (data) {
          console.log(data)
        },
        onInit (data) {
          console.log(data)
        }
      }
  }
  </script>

<template>

<carousel :items-to-show="1.5">
    <slide v-for="slide in 10" :key="slide">
      {{ slide }}
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>

</template>
  <script>
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
  import AquariusSign from '../components/AquariusSign.vue';   

    export default({
      name: 'app',
      components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
        AquariusSign,
      }

    })
  </script>

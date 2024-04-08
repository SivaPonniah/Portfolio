<template>
  <div class="pt-20 bg-orange-500 text-white" id="projects">
    <h1 class="sm:text-5xl text-4xl sm:text-center text-center sm:mt-6 mt-6">Projects</h1>
    <div class="flex justify-center rounded-lg">
      <carousel :items="carouselItems"/>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/components/carousel.vue";
import image1 from "@/assets/foto1.png";
import image3 from "@/assets/logo.svg";
import image2 from "@/assets/foto2.png";

export default {
  name: 'Project',
  components: {
    Carousel
  },
  data() {
    return {
      carouselItems: [
        { image: image1 },
        { image: image2 },
        { image: image3 }
      ]
    };
  }
}
</script>

<template>
  <div class="relative">
    <div class="overflow-hidden rounded-lg">
      <div class="flex transition-transform ease-in-out duration-300" :style="{ width: `${items.length * 100}%`, transform: `translateX(-${currentIndex * (100 / items.length)}%)` }">
        <div v-for="(item, index) in items" :key="index" class="w-full flex flex-col items-center">
          <h2 class="text-center mt-2 text-2xl mb-4">Edullecta</h2>
          <img :src="item.image" class=" object-cover mb-4 px-2 rounded-3xl sm:h-1/2 sm:w-1/2" alt="carousel item">
          <div class="flex justify-center gap-2 mt-4">
            <button v-for="dotIndex in items.length" :key="dotIndex" @click="currentIndex = dotIndex - 1" class="h-3 w-3 rounded-full" :class="{ 'bg-white': currentIndex === dotIndex - 1, 'bg-gray-400': currentIndex !== dotIndex - 1 }" aria-label="Go to slide"></button>
          </div>
          <div class="flex justify-center mt-2">
            <button @click="prev" class="text-white px-2 py-1 sm:right-96 sm:-top-72" aria-label="Previous slide">
              <svg class="h-6 w-6 sm:h-12 sm:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <button @click="next" class="text-white px-2 py-1 sm:left-96  sm:-top-72" aria-label="Next slide">
              <svg class="h-6 w-6 sm:h-12 sm:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
          <p class="text-sm px-2  mt-4 text-center sm:text-2xl">During my internship, I participated in the project Edullecta for Fluitend Leren, where we developed an E-learning platform.
            This platform, created in a project group of four people, allows teachers to add, view and share lessons for a specific subject with students.
            Fluitend Leren already offers physical books, but now also in the form of PDF files on this E-learning platform.
            During this project, I gained valuable experience with the frameworks Vue.js and Laravel.
            It was an instructive and fascinating project that taught me a lot. </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    }
  }
}
</script>
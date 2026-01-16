<template>
  <div class="project-card group">
    <!-- Image Container -->
    <div class="relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm">
      <!-- Carousel Container -->
      <div class="relative h-64 sm:h-80 lg:h-96">
        <div
            class="flex transition-transform ease-in-out duration-500"
            :style="{
            width: `${items.length * 100}%`,
            transform: `translateX(-${currentIndex * (100 / items.length)}%)`
          }"
        >
          <div
              v-for="(item, index) in items"
              :key="index"
              class="w-full h-64 sm:h-80 lg:h-96 flex items-center justify-center p-4"
          >
            <img
                :src="item.image"
                @click="popUpInfo = !popUpInfo"
                class="max-w-full max-h-full object-contain rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300 shadow-2xl"
                alt="Project screenshot"
            >
          </div>
        </div>

        <!-- Navigation Arrows - Overlay on image -->
        <button
            v-if="items.length > 1"
            @click="prev"
            class="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 sm:p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
            aria-label="Previous slide"
        >
          <svg class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        <button
            v-if="items.length > 1"
            @click="next"
            class="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 sm:p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
            aria-label="Next slide"
        >
          <svg class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>

        <!-- Dots Indicator - Bottom of image -->
        <div v-if="items.length > 1" class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          <button
              v-for="dotIndex in items.length"
              :key="dotIndex"
              @click="currentIndex = dotIndex - 1"
              class="transition-all duration-300 rounded-full"
              :class="{
              'w-8 h-2 bg-white': currentIndex === dotIndex - 1,
              'w-2 h-2 bg-white/50 hover:bg-white/70': currentIndex !== dotIndex - 1
            }"
              aria-label="Go to slide"
          ></button>
        </div>
      </div>

      <!-- Info Button Overlay -->
      <button
          @click="popUpInfo = !popUpInfo"
          class="absolute top-4 right-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-2 sm:p-3 transition-all duration-300 shadow-lg z-10 opacity-0 group-hover:opacity-100"
          aria-label="Show project info"
      >
        <svg class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </button>
    </div>

    <!-- Project Info -->
    <div class="mt-6 space-y-4">
      <!-- Title -->
      <h3 class="text-2xl sm:text-3xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
        {{ projectInfo.title }}
      </h3>

      <!-- Tech Stack -->
      <div class="flex flex-wrap gap-2">
        <span
            v-for="tech in projectInfo.techs"
            :key="tech"
            class="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-full text-sm font-medium text-orange-300 hover:from-orange-500/30 hover:to-orange-600/30 hover:border-orange-400/50 transition-all duration-300"
        >
          {{ tech }}
        </span>
      </div>
    </div>

    <!-- Popup Modal -->
    <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
      <div
          v-if="popUpInfo"
          class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          @click="popUpInfo = false"
      >
        <div
            @click.stop
            class="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-2xl w-full shadow-2xl border border-gray-700 transform transition-all duration-300"
        >
          <!-- Close Button -->
          <button
              @click="popUpInfo = false"
              class="absolute -top-4 -right-4 bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-lg transition-colors z-10"
              aria-label="Close popup"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <!-- Modal Content -->
          <div class="p-6 sm:p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="h-1 w-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
              <h3 class="text-2xl sm:text-3xl font-bold text-white">
                {{ projectInfo.title }}
              </h3>
            </div>

            <p class="text-base sm:text-lg leading-relaxed text-gray-300 mb-6">
              {{ projectInfo.description }}
            </p>

            <!-- Tech Stack in Modal -->
            <div class="flex flex-wrap gap-2">
              <span
                  v-for="tech in projectInfo.techs"
                  :key="tech"
                  class="px-4 py-2 bg-orange-500/20 border border-orange-500/50 rounded-lg text-sm font-medium text-orange-300"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface CarouselItem {
  image: string;
}

interface ProjectInfo {
  title: string;
  description: string;
  techs: string[];
}

export default defineComponent({
  name: 'ProjectCarousel',
  props: {
    items: {
      type: Array as PropType<CarouselItem[]>,
      required: true
    },
    projectInfo: {
      type: Object as PropType<ProjectInfo>,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0,
      popUpInfo: false
    }
  },
  methods: {
    next(): void {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
    prev(): void {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    }
  }
});
</script>

<style scoped>
.project-card {
  @apply relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-3xl p-6 border border-gray-700/50 transition-all duration-500 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10;
}
</style>
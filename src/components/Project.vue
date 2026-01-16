<template>
  <div class="min-h-screen bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600 py-12 px-4 sm:px-6 lg:px-8" id="project">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16 pt-8">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
          My <span class="text-gray-900">Projects</span>
        </h1>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <!-- Project 1: Edullecta -->
        <ProjectCarousel
            :items="edullectaImages"
            :projectInfo="edullectaInfo"
        />

        <!-- Project 2: Code Exchange -->
        <ProjectCarousel
            :items="project2Images"
            :projectInfo="project2Info"
        />

        <!-- Project 3: Lucastars Webshop -->
        <ProjectCarousel
            :items="project3Images"
            :projectInfo="project3Info"
        />

        <!-- Project 4: Todd -->
        <ProjectCarousel
            :items="project4Images"
            :projectInfo="project4Info"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProjectCarousel from '@/components/components/carousel.vue';

export default defineComponent({
  name: 'ProjectsPage',
  components: {
    ProjectCarousel
  },
  data() {
    return {
      // PROJECT 1: EDULLECTA
      edullectaImages: [
        { image: '/Portfolio/assets/login.png' },
        { image: '/Portfolio/assets/dashboard.png' },
        { image: '/Portfolio/assets/boek.png' }
      ],
      edullectaInfo: {
        title: 'Edullecta',
        description: 'During my internship, I participated in the project Edullecta for Fluitend Leren, where we developed an E-learning platform. This platform, created in a project group of four people, allows teachers to add, view and share lessons for a specific subject with students. Fluitend Leren already offers physical books, but now also in the form of PDF files on this E-learning platform. During this project, I gained valuable experience with the frameworks Vue.js and Laravel. It was an instructive and fascinating project that taught me a lot.',
        techs: ['Vue.js', 'Laravel', 'Tailwind CSS']
      },

      // PROJECT 2: CODE EXCHANGE
      project2Images: [
        { image: '/Portfolio/assets/code_exchange_3.png' },
        { image: '/Portfolio/assets/code_exchange_4.png' },
        { image: '/Portfolio/assets/code_exchange_1.png' }
      ],
      project2Info: {
        title: 'Code Exchange',
        description: 'A platform for developers to share and exchange code snippets, collaborate on projects, and learn from each other. Built with a focus on clean code architecture and user experience.',
        techs: ['TypeScript', 'HTML/CSS', 'MySQL']
      },

      // PROJECT 3: LUCASTARS WEBSHOP
      project3Images: [
        { image: '/Portfolio/assets/lucastars_2.png' },
        { image: '/Portfolio/assets/lucastars_3.png' },
        { image: '/Portfolio/assets/lucastars_1.png' }
      ],
      project3Info: {
        title: 'Lucastars Webshop',
        description: 'Full-featured e-commerce platform with product management, shopping cart functionality, and secure checkout process. Designed with modern UI/UX principles.',
        techs: ['TypeScript', 'HTML/CSS', 'mySQL']
      },

      // PROJECT 4: TODD
      project4Images: [
        { image: '/Portfolio/assets/todd_1.png' },
        { image: '/Portfolio/assets/todd_2.png' },
        { image: '/Portfolio/assets/todd_3.png' },
        { image: '/Portfolio/assets/todd_4.png' }
      ],
      project4Info: {
        title: 'Todd Application',
        description: 'Enterprise-level application with JWT authentication, RESTful API architecture, built with scalability and security in mind.',
        techs: ['Vue.js', 'TypeScript', 'Java/Spring Boot', 'PostgreSQL', 'JWT']
      }
    }
  }
});
</script>
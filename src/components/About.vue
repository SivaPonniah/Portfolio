<template>
  <div class="sm:flex sm:flex-col pt-20" id="about">
    <h1 class="sm:text-5xl text-4xl sm:text-center text-center sm:mt-6 mt-6">About Me</h1>
    <p class="text-center sm:text-center sm:text-2xl sm:mt-6 mt-4">Software Development Student</p>
  </div>
  <div class="mt-4 grid md:grid-cols-2 sm:grid-cols-2">
    <div class="p-4">
      <h1 class=" sm:text-4xl text-lg font-bold">Get to know me !</h1>
      <p class="sm:text-2xl mt-8">Hello, I am Siva Ponniah, 19 years old and currently studying Software Development.
        As an inquisitive student, I love discovering new things.
        During my internship at Startpagina, I gained valuable experience in working within a project team and understanding the structure involved.
        Although my interest lies mainly in Front-end development, I am also willing to take on Back-end tasks if needed.</p>
      <a href="#contact" class="block">
        <button class="bg-orange-500 text-white sm:w-1/3 py-2 px-4 rounded-full sm:mt-28 mt-4 sm:text-2xl w-full text-xl">
          Contact Me
        </button>
      </a>
    </div>
    <div class="p-4">
      <h2 class="font-bold sm:text-4xl text-lg">My skills</h2>
      <div class="grid grid-rows-2">
        <div v-for="(skill, index) in skills" :key="index">
          <h1 class="font-bold text-2xl mt-4">{{ skill.name }}</h1>
          <div class="md:w-full w-full rounded-full h-2.5 bg-slate-300 mt-2">
            <div class="progress-bar bg-orange-500 h-2.5 rounded-full" :style="{ width: skill.progress + '%' }"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { name: 'HTML', progress: 0 },
        { name: 'PHP', progress: 0 },
        { name: 'Tailwind CSS', progress: 0 },
        { name: 'Vue JS', progress: 0 },
        { name: 'Laravel', progress: 0 },
        { name: 'Agile', progress: 0 }
      ],
      percentages: [70, 50, 70, 65, 50, 65]
    };
  },
  mounted() {
    this.updateProgress();
  },
  methods: {
    updateProgress() {
      this.skills.forEach((skill, index) => {
        setTimeout(() => {
          skill.progress = this.percentages[index];
        }, (index + 1) * 500);
      });
    }
  }
};
</script>

<style scoped>
.progress-bar {
  transition: width 4s ease-in-out; /* Adjust duration as needed */
}
</style>

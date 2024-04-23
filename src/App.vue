<template>
  <div id="app" class="">
    <title>Portfolio</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <nav-bar/>
    <home class="h-[calc(100vh-80px)] "/>
      <about class="min-h-screen"/>
        <project class="min-h-screen"/>
          <contact class="min-h-screen"/>
            <Footer class="min-h-16"/>
  </div>
</template>


<script>
import NavBar from "@/components/NavBar.vue"
import Home from "@/components/Home.vue"
import About from "@/components/About.vue"
import Project from "@/components/Project.vue"
import Contact from "@/components/Contact.vue"
import Footer from "@/components/Footer.vue";

export default {
  name: 'App',
  components: {Footer, NavBar, Home, About, Project, Contact}
}
</script>
<template>
  <header class="bg-white sm:flex sm:justify-between sm:items-center sm:px-10 sm:py-3  sticky z-50 top-0">
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">

      <div class="max-w-screen-xl flex items-center p-4">
        <a href="#app" class="flex items-center  rtl:space-x-reverse">
          <img src="../../public/6840478.png" class="h-8 hidden sm:block"/>
          <span class="self-center text-xl whitespace-nowrap text-black">Siva Ponniah</span>
        </a>
      </div>

      <!-- Button -->
      <div class="md:hidden">
        <button @click="isOpen = !isOpen" type="button" class="text-gray-500 hover:bg-gray-100 mr-4">
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>
    </div>
      <nav class="sm:flex sm:p-0" :class="isOpen ? 'bg-white underline underline-offset-8 decoration-orange-500    w-full text-center absolute' : 'hidden'" >
<!--        <ul class="text-black flex flex-col p-4 md:p-0 mt-4 border rounded-lg bg-gray-50 md:flex-row md:space-x-10 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">-->
<!--          <li class="flex items-center">-->
            <a href="#app" @click="isOpen = false" class="group text-xl py-2 px-8 transition-all duration-300 ease-in-out">
              <span class="bg-left-bottom bg-gradient-to-r from-orange-500 to-orange-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out block">
                Home
              </span>
            </a>
<!--          </li>-->
<!--          <li class="flex items-center">-->
            <a  href="#about" @click="isOpen = false" class="group text-xl  py-2 px-8 transition-all duration-300 ease-in-out">
              <span class="bg-left-bottom bg-gradient-to-r from-orange-500 to-orange-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out block">
                About Me
              </span>
            </a>
<!--          </li>-->
<!--          <li class="flex items-center">-->
            <a  href="#project" @click="isOpen = false" class="group text-xl py-2 px-8 transition-all duration-300 ease-in-out">
                  <span class="bg-left-bottom bg-gradient-to-r from-orange-500 to-orange-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out block">
                    Project
                  </span>
            </a>
        <a  href="/CV.pdf" target="_blank" @click="isOpen = false" class="group text-xl py-2 px-8 transition-all duration-300 ease-in-out">
                  <span class="bg-left-bottom bg-gradient-to-r from-orange-500 to-orange-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out block">
                    CV
                  </span>
        </a>

            <a  href="#contact" @click="isOpen = false" class="group text-xl py-2 px-8 transition-all duration-300 ease-in-out">
                  <span class="bg-left-bottom bg-gradient-to-r from-orange-500 to-orange-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out block">
                    Contact
                  </span>
            </a>
      </nav>
  </header>
</template>

<script>
export default {
  data(){
    return {
      isOpen: false,
    }
  }
}
</script>

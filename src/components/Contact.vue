<template>
  <div class="container mx-auto px-4 pt-32" id="contact">
    <h1 class="sm:text-5xl text-4xl text-center mb-2">Contact</h1>
    <p class="text-xl text-center mb-8">Get in touch with me</p>

    <div class="flex flex-col md:flex-row items-start justify-between gap-10">
      <div class="w-full md:w-1/2">
        <div class="border-2 border-orange-500 bg-orange-200 rounded-xl p-8 text-gray-600">
          <form class="flex flex-col space-y-4" action="https://formsubmit.co/sivaponniah14@gmail.com" method="POST">
            <div>
              <label class="text-white" for="name">Name</label>
              <input
                  id="name"
                  name="name"
                  class="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="name"
                  type="text"
                  required>
            </div>
            <div>
              <label class="text-white" for="email">Email</label>
              <input
                  id="email"
                  name="email"
                  class="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="E-mail"
                  type="email"
                  required>
            </div>
            <div>
              <label class="text-white" for="message">Message</label>
              <textarea
                  id="message"
                  name="message"
                  class="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-orange-500"
                  rows="4"
                  placeholder="Message"
                  required></textarea>
            </div>
            <button class="inline-block self-end bg-orange-500 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm hover:bg-orange-600 transition-colors" type="submit">Send message</button>
          </form>
        </div>
      </div>

      <div class="w-full md:w-1/2 flex justify-center md:justify-end">
        <img src="/assets/3779143.jpg" alt="Profile Art" class="rounded-full border-2 border-orange-500 max-w-2xl w-full"/>
      </div>
    </div>
  </div>
</template>

<script>
</script>
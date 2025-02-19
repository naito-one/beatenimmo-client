<template>
  <main class="relative">
    <video
      src="/video/beatenimmo_frontpage.mp4"
      autoplay
      loop
      class="object-cover fixed top-0 left-0 w-full h-screen -z-10"
    ></video>

    <div class="relative w-full min-h-[100vh] flex flex-col items-center">
      <!-- gradient background -->
      <div class="flex absolute top-0 flex-col w-full h-full -z-10">
        <div class="w-full h-80 lg:h-96 smooth-gradient"></div>
        <!-- background filled semi-transparent-->
        <div class="h-12 bg-gray-100/90"></div>
        <!-- background filled opaque transition-->
        <img
          src="/img/background.png"
          class="w-screen h-12 bg-gray-100/90 md:h-auto lg:h-24 object-fit"
        />
        <!-- background filled opaque-->
        <div class="bg-white grow"></div>
      </div>

      <img
        src="/img/beatenimmo-logo-light.svg"
        alt="BeatenIMMO"
        class="z-10 mt-16 lg:mt-12 w-3/4 select-none sm:w-1/2 lg:w-[35rem] "
      />
      <p class="px-4 text-lg text-center">
        Your real estate partner in Beatenberg
      </p>

      <div
        class="overflow-hidden m-4 text-center text-white rounded-lg shadow-md bg-bi-blue"
      >
        <img
          src="/img/splash.jpg"
          alt="Wooden Building in Beatenberg"
          class="w-full sm:w-auto sm:h-96"
        />

        <div class="flex flex-col items-center p-4">
          <p class="px-4 mb-4">Website under construction</p>
          <a href="mailto:info@beatenimmo.ch" class="underline font-numbers"
            >info@beatenimmo.ch</a
          >
          <a href="tel:+41 78 703 00 33" class="underline font-numbers"
            >+41 78 703 00 33</a
          >
        </div>
      </div>
    </div>
  </main>
</template>
<style>
.smooth-gradient {
  background: linear-gradient(
    to bottom,
    hsla(220, 14.29%, 95.88%, 0) 0%,
    hsla(220, 14.29%, 95.88%, 0.011) 11.3%,
    hsla(220, 14.29%, 95.88%, 0.044) 20.5%,
    hsla(220, 14.29%, 95.88%, 0.094) 28.1%,
    hsla(220, 14.29%, 95.88%, 0.158) 34.2%,
    hsla(220, 14.29%, 95.88%, 0.233) 39.3%,
    hsla(220, 14.29%, 95.88%, 0.317) 43.6%,
    hsla(220, 14.29%, 95.88%, 0.405) 47.4%,
    hsla(220, 14.29%, 95.88%, 0.495) 51.1%,
    hsla(220, 14.29%, 95.88%, 0.583) 55%,
    hsla(220, 14.29%, 95.88%, 0.667) 59.4%,
    hsla(220, 14.29%, 95.88%, 0.742) 64.6%,
    hsla(220, 14.29%, 95.88%, 0.806) 71%,
    hsla(220, 14.29%, 95.88%, 0.856) 78.8%,
    hsla(220, 14.29%, 95.88%, 0.889) 88.3%,
    hsla(220, 14.29%, 95.88%, 0.9) 100%
  );
}
</style>

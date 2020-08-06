<template>
  <div>
    <h1>About me</h1>
    <div class="relative flex items-center justify-center h-72 my-12">
      <div class="absolute w-72 h-72 bg-blue-200 rounded-full"></div>
      <img
        class="rounded-full w-64 h-64 object-cover z-10 absolute bg-white"
        src="~/assets/img/dvonrohr.png"
        alt="Daniel Von Rohr"
      />
    </div>
    <div class="max-w-5xl m-auto">
      <p>
        My name is Daniel von Rohr. I’m a full-stack web developer and work for
        <a href="http://www.w-vision.ch" target="_blank">w-vision </a>
        in Sursee / Switzerland.
      </p>
      <p class="mt-6">
        I love working with new web technologies and have experience with
        Pimcore, TYPO3, PHP, Python, Elixir, JavaScript and much more.
      </p>
      <p class="mt-6">
        Always looking what's new and promising, i try to use my own words here
        for others to learn from my own mistakes 😉.
      </p>
      <p class="mt-6">
        <em>Thank You for reading!</em>
      </p>
      <blockquote
        class="my-12 relative p-4 text-xl italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote"
      >
        <p class="mb-4">
          What separates design from art is that design is meant to be
          functional.
        </p>
        <cite>- Cameron Moll</cite>
      </blockquote>
    </div>
    <div>
      If you like to connect you add me on your prefered social media app.

      <div>
        <a
          href="https://github.com/dvonrohr"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block w-24"
        >
          <span class="sr-only">GitHub</span>
          <img src="@/static/logos/github.svg?inline" />
        </a>
        <a
          href="https://twitter.com/dvonrohr"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block w-24"
        >
          <span class="sr-only">Twitter</span>
          <img src="@/static/logos/twitter.svg?inline" />
        </a>
        <a
          href="https://www.linkedin.com/in/dvonrohr/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block w-24"
        >
          <span class="sr-only">LinkedIn</span>
          <img src="@/static/logos/linkedin.svg?inline" />
        </a>
        <a
          href="https://www.facebook.com/daniel.vonrohr"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block w-24"
        >
          <span class="sr-only">Facebook</span>
          <img src="@/static/logos/facebook.svg?inline" />
        </a>
        <a
          href="https://codepen.io/dvonrohr"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block w-24"
        >
          <span class="sr-only">CodePen</span>
          <img src="@/static/logos/codepen.svg?inline" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
}
</script>

<template>
  <div>
    <h1>About me</h1>
    <div>
      <img
        class="rounded-full w-64 h-64 border object-cover"
        src="~/assets/img/dvonrohr.png"
        alt="Daniel Von Rohr"
      />
    </div>
    <div>
      <p>
        My name is Daniel von Rohr. I’m a full-stack web developer and work for
        <a href="http://www.w-vision.ch" target="_blank">w-vision </a>
        in Sursee / Switzerland.
      </p>
      <p>
        I love working with new web technologies and have experience with
        Pimcore, TYPO3, PHP, Python, Elixir, JavaScript and much more.
      </p>
      <p>
        Always looking what's new and promising, i try to use my own words here
        for others to learn from my own mistakes 😉.
      </p>
      <blockquote>
        <p>
          What separates design from art is that design is meant to be
          functional. <cite>- Cameron Moll</cite>
        </p>
      </blockquote>
      <p><em>Thank You for reading!</em></p>
    </div>
    <div>
      If you like to connect you add me on your prefered social media app.

      <div>
        <a href="#">
          <img src="@/static/logos/twitter.svg?inline" />
        </a>
        <a href="#">
          <img src="@/static/logos/linkedin.svg?inline" />
        </a>
        <a href="#">
          <img src="@/static/logos/facebook.svg?inline" />
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

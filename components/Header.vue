<template>
  <div class="flex">
    <div>
      <a href="/">
        <img src="@/assets/img/logo.svg?inline" />
      </a>
    </div>
    <nav class="flex-grow flex items-center">
      <nuxt-link to="/" class="ml-24">
        Home
      </nuxt-link>
      <nuxt-link to="/about" class="ml-5">
        About
      </nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

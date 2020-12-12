<template>
  <article>
    <h1 class="text-5xl mt-12">{{ article.title }}</h1>
    <p>{{ formatDate(article.date) }}</p>

    <nuxt-content class="my-16" :document="article" />

    <prev-next :prev="prev" :next="next" />
  </article>
</template>

<script>
import Prism from "prismjs"
import "prismjs/components/prism-markup-templating"
import "prism-themes/themes/prism-material-oceanic.css"

import "prismjs/components/prism-php.js"
import "prismjs/components/prism-javascript.js"
import "prismjs/components/prism-typescript.js"
import "prismjs/components/prism-typoscript.js"
import "prismjs/components/prism-scss.js"

export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
  mounted() {
    Prism.highlightAll()
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" }
      return new Date(date).toLocaleDateString("en", options)
    },
  },
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch()

    return { article }
  },
}
</script>

<style>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}

.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}

.nuxt-content p {
  margin-bottom: 20px;
}
</style>

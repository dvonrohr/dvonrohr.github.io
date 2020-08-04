<template>
  <article>
    <p>Article last updated: {{ formatDate(article.date) }}</p>
    <nuxt-content :document="article" />

    <prev-next :prev="prev" :next="next" />
  </article>
</template>

<script>
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
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch()
    console.log(article)
    return { article }
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" }
      return new Date(date).toLocaleDateString("en", options)
    },
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

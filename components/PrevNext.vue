<template>
  <div class="flex justify-between">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
      class="text-primary font-bold hover:underline"
    >
      {{ prev.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="{ name: 'blog-slug', params: { slug: next.slug } }"
      class="font-bold hover:underline"
    >
      {{ next.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
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

    const [prev, next] = await $content("articles")
      .only(["title", "slug"])
      .sortBy("date", "asc")
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next,
    }
  },
}
</script>

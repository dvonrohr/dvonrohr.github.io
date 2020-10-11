<template>
  <div>
    <div class="mt-32 mb-20 w-5/6 m-auto">
      <h1 class="text-5xl inline leading-none">Welcome</h1>
      <p class="inline pt-12 pb-12 text-gray-800">
        and thanks for stopping by. This is my blog and here I post what
        interests me the most. I am not THE
        <a
          href="https://www.youtube.com/channel/UC4xKdmAXFh4ACyhpiQ_3qBw"
          target="_blank"
          rel="noopener noreferrer"
          class="relative italic hover:underline"
        >
          TechLead
        </a>
        and can make mistakes (and admit it). If you have a different opinion or
        want to elaborate on a topic, I look forward reading from you.
      </p>
      <p class="mt-4">Thanks for reading!</p>
    </div>
    <ul class="max-w-3/4">
      <li v-for="article of articles" :key="article.slug" class="mt-4">
        <NuxtLink
          class="flex items-center"
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
        >
          <span class="relative mr-12 flex items-center justify-center">
            <Shape class="fill-current text-gray-200 inline-block h-72 w-72" />
            <img
              :src="`/logos/${article.img}.svg`"
              class="absolute inline-block w-2/3"
              :alt="`${article.img}`"
            />
          </span>
          <span>
            <small class="text-gray-700 mb-0">
              {{ formatDate(article.date) }}
            </small>
            <h2 class="text-3xl tracking-wide mb-3 mt-0">
              {{ article.title }}
            </h2>
            <p>{{ article.description }}</p>
            <span class="inline-block pt-3 hover:underline">More ...</span>
          </span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
import Shape from "@/assets/img/shape3.svg"

export default {
  layout: "default",
  components: {
    Shape,
  },
  async asyncData({ $content, params }) {
    const articles = await $content("articles", params.slug)
      .only(["title", "description", "img", "slug", "date"])
      .sortBy("createdAt", "desc")
      .fetch()

    return {
      articles,
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" }
      return new Date(date).toLocaleDateString("en", options)
    },
  },
}
</script>

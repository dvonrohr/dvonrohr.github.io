<template>
  <div>
    <h1 class="pt-16 text-5xl">
      Welcome
    </h1>
    <p class="inline-block pt-12 pb-16">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ex facere
      sequi dolorum optio aliquam vero molestiae laboriosam alias quo
      consectetur perspiciatis a cum itaque, nesciunt accusantium molestias
      corporis et?
    </p>
    <ul>
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink
          class="flex items-center"
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
        >
          <span class="relative mr-12">
            <Shape class="fill-current text-gray-300 inline-block h-64 w-64" />
            <img
              :src="`/logos/${article.img}.svg`"
              class="absolute w-48 inline-block ml-auto mr-auto left-0 right-0 text-center"
              alt="`${article.img}`"
            />
          </span>
          <span>
            <h2 class="text-3xl tracking-wide">{{ article.title }}</h2>
            <p>{{ article.description }}</p>
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
      .only(["title", "description", "img", "slug", "author"])
      .sortBy("createdAt", "asc")
      .fetch()

    return {
      articles,
    }
  },
}
</script>

<template>
  <div>
    <h1 class="text-xl">
      test
    </h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ex facere
      sequi dolorum optio aliquam vero molestiae laboriosam alias quo
      consectetur perspiciatis a cum itaque, nesciunt accusantium molestias
      corporis et?
    </p>
    <ul>
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <img :src="article.img" />
          <div>
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: "default",
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

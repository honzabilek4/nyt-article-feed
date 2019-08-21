<template>
  <v-wait
    for="Fetching article"
    class="py-8 max-w-2xl mx-auto"
  >
    <h1 class="text-5xl font-serif font-normal leading-tight mb-2">
      {{ article.title }}
    </h1>
    <div class="text-xs mb-4">
      {{ article.byline }}
    </div>
    <div class="text-xl mb-4">
      {{ article.abstract }}
    </div>
    <div class="mb-4">
      <img
        class="w-full h-auto"
        :src="article.multimedia[3].url"
      >
    </div>
    <div class="text-center">
      <a
        class="text-xl font-bold hover:underline"
        target="_blank"
        :href="article.url"
      >Read the article ></a>
    </div>
  </v-wait>
</template>
<script lang="ts">
import Vue from 'vue';
import fetchData from '@/functions/fetch-data';
import IArticlePreview from '@/models/article-preview';

export default Vue.extend({
  name: 'ArticleDetail',
  data(): {
    article: IArticlePreview,
    } {
    return {
      article: {} as IArticlePreview,
    };
  },
  async created() {
    this.$wait.start('Fetching article');
    const data = await fetchData('/content.json', { params: { url: this.$route.query.url } });
    [this.article] = data.results;
    this.$wait.end('Fetching article');
  },
});
</script>

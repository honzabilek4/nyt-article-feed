A<template>
  <div class="py-8 max-w-2xl mx-auto">
    <article-preview
      v-for="article in articles"
      :key="article.url"
      :article="article"
      class="article-preview mb-6"
    />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import fetchData from '@/functions/fetch-data';
import ArticlePreview from '@/components/ArticlePreview.vue';
import IArticlePreview from '../models/article-preview';

export default Vue.extend({
  name: 'ArticleFeed',
  components: {
    ArticlePreview,
  },
  data(): {
    articles: IArticlePreview[],
    } {
    return {
      articles: [],
    };
  },
  async created() {
    const data = await fetchData('/content/all/all');
    this.articles = data.results;
  },
});
</script>

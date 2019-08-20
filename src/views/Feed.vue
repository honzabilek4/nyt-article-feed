<template>
  <div class="mt-8 max-w-2xl mx-auto">
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

export default Vue.extend({
  name: 'Feed',
  components: {
    ArticlePreview,
  },
  data() {
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

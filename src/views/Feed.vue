<template>
  <div class="mt-8 max-w-2xl mx-auto">
    <div
      v-for="article in articles"
      :key="article.url"
      class="article-preview mb-6"
    >
      <h2 class="font-serif font-bold text-3xl">
        {{ article.title }}
      </h2>
      <div>
        {{ article.abstract }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import fetchData from '@/functions/fetch-data';

export default Vue.extend({
  name: 'Feed',
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

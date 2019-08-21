<template>
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
import { mapState } from 'vuex';
import fetchData from '@/functions/fetch-data';
import ArticlePreview from '@/components/ArticlePreview.vue';

export default Vue.extend({
  name: 'ArticleFeed',
  components: {
    ArticlePreview,
  },
  computed: {
    ...mapState({ articles: 'articleFeed' }),
  },
  async created() {
    // Fetch article feed only on page refresh, to prevent reaching the API rate limit
    if (this.shouldFetch()) {
      await this.$store.dispatch('fetchArticleFeed');
    }
  },
  methods: {
    shouldFetch():boolean {
      return this.articles.length === 0;
    },
  },
});
</script>

<template>
  <v-wait
    :for="FETCH_NAME"
    class="py-8 max-w-2xl mx-auto"
  >
    <template slot="waiting">
      <!-- Some content placeholder can be added here -->
      Loading...
    </template>
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
        :src="article.multimedia[article.multimedia.length - 1].url"
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
import { mapState } from 'vuex';
import fetchData from '@/functions/fetch-data';

export default Vue.extend({
  name: 'ArticleDetail',
  data(): {
    FETCH_NAME: string,
    } {
    return {
      FETCH_NAME: 'Fetching article',
    };
  },
  computed: {
    ...mapState({ article: 'articleDetail' }),
  },
  async created() {
    this.$wait.start(this.FETCH_NAME);
    await this.$store.dispatch('fetchArticleDetail', this.$route.query.url);
    this.$wait.end(this.FETCH_NAME);
  },
});
</script>

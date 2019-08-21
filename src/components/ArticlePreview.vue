<template>
  <div class="article-preview">
    <router-link :to="{ name: 'article-detail', query: { url: article.url }}">
      <h2 class="font-serif font-normal leading-tight mb-2 text-2xl">
        {{ article.title }}
      </h2>
      <div>
        {{ article.abstract }}
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import IArticlePreview from '@/models/article-preview';

export default Vue.extend({
  props: {
    article: {
      type: Object as () => IArticlePreview,
      required: true,
    },
  },
});
</script>
<style lang="postcss" scoped>
  .article-preview:hover h2{
    @apply underline;
  }
</style>

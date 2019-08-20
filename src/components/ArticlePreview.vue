<template>
  <div>
    <h2 class="font-serif font-normal leading-tight mb-2 text-2xl">
      {{ article.title }}
    </h2>
    <div>
      {{ article.abstract }}
    </div>
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

/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex, { MutationTree, ActionTree } from 'vuex';
import fetchData from '@/functions/fetch-data';
import IArticlePreview from '@/models/article-preview';

Vue.use(Vuex);

interface IStoreState {
  articleFeed: IArticlePreview[];
  articleDetail: IArticlePreview | {};
}


const state: IStoreState = {
  articleFeed: [],
  articleDetail: {},
};

const mutations: MutationTree<IStoreState> = {
  POPULATE_FEED(context, data) {
    context.articleFeed = data;
  },
  POPULATE_ARTICLE(context, data) {
    context.articleDetail = data;
  },
};

const actions: ActionTree<IStoreState, IStoreState> = {
  async fetchArticleFeed(context) {
    const data = await fetchData('/content/all/all');
    context.commit('POPULATE_FEED', data.results);
  },
  async fetchArticleDetail(context, url: string) {
    const data = await fetchData('/content.json', { params: { url } });
    context.commit('POPULATE_ARTICLE', data.results[0]);
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});

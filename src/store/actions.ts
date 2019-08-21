import { ActionTree } from 'vuex';
import { IStoreState } from '@/store/state';
import fetchData from '@/functions/fetch-data';

const actions: ActionTree<IStoreState, IStoreState> = {
  async fetchArticleFeed(context): Promise<void> {
    const data = await fetchData('/content/all/all');
    context.commit('POPULATE_FEED', data.results);
  },
  async fetchArticleDetail(context, url: string) {
    const data = await fetchData('/content.json', { params: { url } });
    context.commit('POPULATE_ARTICLE', data.results[0]);
  },
};

export default actions;

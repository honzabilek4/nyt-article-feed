import { MutationTree } from 'vuex';
import { IStoreState } from '@/store/state';

const mutations: MutationTree<IStoreState> = {
  POPULATE_FEED(context, data) {
    context.articleFeed = data;
  },
  POPULATE_ARTICLE(context, data) {
    context.articleDetail = data;
  },
};

export default mutations;

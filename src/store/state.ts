import IArticlePreview from '@/models/article-preview';

export interface IStoreState {
  articleFeed: IArticlePreview[];
  articleDetail: IArticlePreview | {};
}


const state: IStoreState = {
  articleFeed: [],
  articleDetail: {},
};

export default state;

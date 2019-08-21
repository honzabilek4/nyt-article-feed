import { ActionContext } from 'vuex';
import actions from '@/store/actions';
import fetchData from '@/functions/fetch-data';

jest.mock('@/functions/fetch-data', () => jest.fn().mockImplementation(() => ({ results: ['TEST'] })));

describe('store actions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should fetch article feed and commit result', async () => {
    const commit = jest.fn();
    const fetchArticleFeedAction = actions.fetchArticleFeed as Function;
    await fetchArticleFeedAction({ commit });
    expect(fetchData).toBeCalledWith('/content/all/all');
    expect(commit).toBeCalledWith('POPULATE_FEED', ['TEST']);
  });
  it('should fetch article detail and commit result', async () => {
    const commit = jest.fn();
    const fetchArticleDetailAction = actions.fetchArticleDetail as Function;
    await fetchArticleDetailAction({ commit }, 'TEST_URL');
    expect(fetchData).toBeCalledWith('/content.json', { params: { url: 'TEST_URL' } });
    expect(commit).toBeCalledWith('POPULATE_ARTICLE', 'TEST');
  });
});

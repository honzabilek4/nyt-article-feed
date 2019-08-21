import { shallowMount } from '@vue/test-utils';
import ArticlePreview from '@/components/ArticlePreview.vue';

describe('ArticlePreview.vue', () => {
  it('should display article title', () => {
    const wrapper = shallowMount(ArticlePreview, {
      stubs: ['router-link'],
      propsData: {
        article: {
          title: 'Test title',
        },
      },
    });
    expect(wrapper.find('h2').text()).toBe('Test title');
  });
  it('should display article abstract', () => {
    const wrapper = shallowMount(ArticlePreview, {
      stubs: ['router-link'],
      propsData: {
        article: {
          abstract: 'Test abstract',
        },
      },
    });
    expect(wrapper.find('.article-abstract').text()).toBe('Test abstract');
  });
});

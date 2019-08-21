// import mockAxios from 'axios';
import { AxiosResponse } from 'axios';
import api from '@/api/request';
import fetchData from '@/functions/fetch-data';

jest.mock('request');

describe('fetch-data.ts', () => {
  it('should dispatch GET request', async () => {
    api.get = jest.fn(async () => ({ data: {} } as AxiosResponse<any>));
    const result = await fetchData('/test', {});
    expect(api.get).toBeCalledTimes(1);
  });

  it('should pass request options', () => {

  });
});

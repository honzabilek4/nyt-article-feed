// import mockAxios from 'axios';
import { AxiosResponse } from 'axios';
import api from '@/api/request';
import fetchData from '@/functions/fetch-data';

const apiGetMock = jest.fn(async () => ({ data: {} } as AxiosResponse<any>));

describe('fetch-data.ts', () => {
  it('should dispatch GET request', async () => {
    api.get = apiGetMock;
    await fetchData('/test', {});
    expect(api.get).toBeCalledTimes(1);
  });

  it('should pass request options', async () => {
    api.get = apiGetMock;
    const options = { params: { id: 1 } };
    await fetchData('/test', options);
    expect(api.get).toBeCalledWith('/test', options);
  });
});

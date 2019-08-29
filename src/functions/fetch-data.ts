import { AxiosRequestConfig } from 'axios';
import api from '@/api/request';

export default async (url: string, options?: AxiosRequestConfig) => {
  const result = await api.get(url, options);
  return result.data;
};

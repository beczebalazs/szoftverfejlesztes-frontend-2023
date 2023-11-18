import { httpClient } from './index';

export const getPhones = async () => (await httpClient.get(`/products`)).data;

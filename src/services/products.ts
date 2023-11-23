import { httpClient } from './index';

export const getProducts = async (category: string) => {
    return (await httpClient.get(`/products?category=${category}`)).data;
  };

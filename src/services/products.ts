import { httpClient } from './index';

export const getProducts = async (category: string) => {
	return (await httpClient.get(`/products?category=${category}`)).data;
};

export const getProductsForSearch = async () => {
	return (await httpClient.get(`/products`)).data;
};

export const getProduct = async (id: string) => (await httpClient.get(`/products/${id}`)).data;


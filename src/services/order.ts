import { httpClient } from '.';

export const postOrder = async (payload: any) =>
	(await httpClient.post('/order/order', payload)).data;

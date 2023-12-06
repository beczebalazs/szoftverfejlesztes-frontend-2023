import { httpClient } from '.';

export const getReviews = async (id: string) => (await httpClient.get(`/reviews/${id}`)).data;

export const postReview = async (payload: any) => (await httpClient.post('/reviews', payload)).data;


import { httpClient } from './index';

export const getCoupones = async () => {
    return (await httpClient.get(`/coupons`)).data;
  };

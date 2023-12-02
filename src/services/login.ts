import { AxiosResponse } from 'axios';

import { httpClient } from '.';
import { LoginPayload } from '../types/Auth';

interface LoginRes {
	user_id: string;
}

const postLogin = async (payload: LoginPayload) =>
	(await httpClient.post<LoginRes, AxiosResponse<LoginRes>, LoginPayload>('sign-in', payload)).data;

export { postLogin };

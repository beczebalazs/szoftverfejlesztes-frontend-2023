import { AxiosResponse } from 'axios';

import { httpClient } from '.';
import { SignUpPayload } from '../types/Auth';

interface SignUpRes {
	statusCode: number;
	message: string;
}

const postSignUp = async (payload: SignUpPayload) =>
	(await httpClient.post<SignUpRes, AxiosResponse<SignUpRes>, SignUpPayload>('sign-up', payload))
		.data;

export { postSignUp };

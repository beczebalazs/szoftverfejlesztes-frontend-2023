import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { LoginPayload } from '../../types/Auth';

const useLoginForm = () => {
	const validationSchema = yup.object({
		email: yup
			.string()
			.email('Not a valid email')
			.required('Is reguired'),
		password: yup
			.string()
			.min(8, 'Min 8 charachters')
			.matches(/[A-Z]/, 'Min 1 upparcase')
			.matches(/[a-z]/, 'Min 1 lowercase')
			.matches(/[0-9]/, 'Min 1 number')
			.matches(/[!@#$%^&*()_+\-=[\]{};':"|,.<>/?]/, 'Min 1 symbol')
			.required('Is reguired'),
	});

	return useForm<LoginPayload>({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: yupResolver(validationSchema),
	});
};

export default useLoginForm;


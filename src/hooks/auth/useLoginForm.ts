import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { LoginPayload } from '../../types/Auth';

const useLoginForm = () => {
	const validationSchema = yup.object({
		email: yup
			.string()
			.email('loginTextfields.validEmail')
			.required('loginTextfields.requiredEmail'),
		password: yup
			.string()
			.min(8, 'signupTextfields.least8Characters')
			.matches(/[A-Z]/, 'signupTextfields.uppercasePassword')
			.matches(/[a-z]/, 'signupTextfields.lowercasePassword')
			.matches(/[0-9]/, 'signupTextfields.numberPassword')
			.matches(/[!@#$%^&*()_+\-=[\]{};':"|,.<>/?]/, 'signupTextfields.symbolPassword')
			.required('loginTextfields.requiredPassword'),
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


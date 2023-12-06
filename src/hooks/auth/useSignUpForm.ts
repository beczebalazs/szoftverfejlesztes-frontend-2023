import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { SignUpInformation } from '../../types/SignUpFormInformation';

const useSignUpForm = (input: string[]) => {
	const validationSchema = yup.object({
		...(input.includes('firstname') && {
			firstname: yup
				.string()
				.matches(/^[a-zA-Z]*$/, 'Need a valid firstname!')
				.required('Is required'),
		}),
		...(input.includes('lastname') && {
			lastname: yup
				.string()
				.matches(/^[a-zA-Z]*$/, 'Need a valid lastname')
				.required('Is required'),
		}),
		...(input.includes('username') && {
			username: yup.string().required('Is required'),
		}),
		...(input.includes('email') && {
			email: yup.string().email('Need a valid email').required('Is required'),
		}),
		...(input.includes('password') && {
			password: yup
				.string()
				.required('Is required')
				.min(8, 'Min 8 charachters')
				.matches(/[A-Z]/, 'Min 1 upparcase')
				.matches(/[a-z]/, 'Min 1 lowercase')
				.matches(/[0-9]/, 'Min 1 number')
				.matches(/[!@#$%^&*()_+\-=[\]{};':"|,.<>/?]/, 'Min 1 symbol'),
		}),
		...(input.includes('passwordconfirmation') && {
			passwordconfirmation: yup
				.string()
				.oneOf([yup.ref('password')], 'signupTextfields.matchPassword')
				.required('Is required'),
		}),
	});

	const defaultValues: { [key: string]: string } = {};
	input.forEach(name => {
		defaultValues[name.toLowerCase()] = '';
	});

	return useForm<SignUpInformation>({
		defaultValues,
		resolver: yupResolver(validationSchema) as any,
	});
};

export default useSignUpForm;


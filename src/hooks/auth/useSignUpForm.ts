import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { SignUpInformation } from '../../types/SignUpFormInformation';

const useSignUpForm = (input: string[]) => {
	const validationSchema = yup.object({
		...(input.includes('firstname') && {
			firstname: yup
				.string()
				.matches(/^[a-zA-Z]*$/, 'signupTextfields.validFirstName')
				.required('signupTextfields.requiredFirstName'),
		}),
		...(input.includes('lastname') && {
			lastname: yup
				.string()
				.matches(/^[a-zA-Z]*$/, 'signupTextfields.validLastName')
				.required('signupTextfields.requiredLastName'),
		}),
		...(input.includes('username') && {
			username: yup.string().required('signupTextfields.requiredUsername'),
		}),
		...(input.includes('email') && {
			email: yup
				.string()
				.email('signupTextfields.validEmail')
				.required('signupTextfields.requiredEmail'),
		}),
		...(input.includes('password') && {
			password: yup
				.string()
				.required('signupTextfields.requiredPassword')
				.min(8, 'signupTextfields.least8Characters')
				.matches(/[A-Z]/, 'signupTextfields.uppercasePassword')
				.matches(/[a-z]/, 'signupTextfields.lowercasePassword')
				.matches(/[0-9]/, 'signupTextfields.numberPassword')
				.matches(/[!@#$%^&*()_+\-=[\]{};':"|,.<>/?]/, 'signupTextfields.symbolPassword'),
		}),
		...(input.includes('passwordconfirmation') && {
			passwordconfirmation: yup
				.string()
				.oneOf([yup.ref('password')], 'signupTextfields.matchPassword')
				.required('signupTextfields.requiredConfirmation'),
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


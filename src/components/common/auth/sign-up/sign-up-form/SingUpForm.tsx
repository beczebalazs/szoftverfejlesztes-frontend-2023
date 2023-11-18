import { createContext, FC, useContext, useState } from 'react';

import { LoadingButton } from '@mui/lab';
import { Unstable_Grid2 as Grid, Stack } from '@mui/material';
import { FormProvider } from 'react-hook-form';

import EmailField from './email-field/EmailField';
import FirstNameField from './first-name-field/FirstNameField';
import LastNameField from './last-name-field/LastNameField';
import PasswordConfirmationField from './password-confirmation-field/PasswordConfirmationField';
import PasswordField from './password-field/PasswordField';
import UsernameField from './username-field/UsernameField';
// import usePostSignUpMutation from '~hooks/auth/usePostSignUpMutation';
import useSignUpForm from '../../../../../hooks/auth/useSignUpForm';
// import { SignUpInformation } from '~types/SignUpInformation';

type Input = 'email' | 'password' | 'passwordConfirmation' | 'username' | 'firstName' | 'lastName';

interface Props {
	input: Input[];
}

interface SignUpFormCtxType {
	inputs: Input[];
}

const SignUpFormCtx = createContext({} as SignUpFormCtxType);

const useSignUpFormCtx = () => useContext(SignUpFormCtx);

const SignUpForm: FC<Props> = props => {
	const [inputs] = useState<Input[]>(props.input);

	const form = useSignUpForm(props.input);
	// const { handleSubmit } = form;

	// const postSignUpMutation = usePostSignUpMutation();

	// const onSubmit = (data: SignUpInformation) => {
	// 	postSignUpMutation.mutate({
	// 		payload: {
	// 			email: data.email!,
	// 			password: data.password!,
	// 			username: data.username!,
	// 			firstName: data.firstName!,
	// 			lastName: data.lastName!,
	// 		},
	// 	});
	// };

	return (
		<SignUpFormCtx.Provider value={{ inputs: inputs }}>
			<FormProvider {...form}>
				<Stack
					component={'form'}
					// onSubmit={handleSubmit(onSubmit)}
					alignItems="center"
					justifyContent="center"
					spacing={1}
					sx={{ width: 330 }}
				>
					{props.input.includes('firstName') && props.input.includes('lastName') ? (
						<div>
							<Grid container spacing={2} sx={{ mt: 6 }}>
								<Grid xxs={6}>
									<FirstNameField />
								</Grid>
								<Grid xxs={6}>
									<LastNameField />
								</Grid>
							</Grid>
						</div>
					) : (
						<>
							{props.input.includes('firstName') && <FirstNameField />}

							{props.input.includes('lastName') && <LastNameField />}
						</>
					)}
					{props.input.includes('username') && <UsernameField />}
					{props.input.includes('email') && <EmailField />}
					{props.input.includes('password') && <PasswordField />}
					{props.input.includes('passwordConfirmation') && <PasswordConfirmationField />}
					<LoadingButton
						// loading={postSignUpMutation.isLoading}
						sx={{ width: 1 / 1, mt: 3 }}
						type="submit"
					>
						signupTextfields.signUp
					</LoadingButton>
				</Stack>
			</FormProvider>
		</SignUpFormCtx.Provider>
	);
};

export { useSignUpFormCtx };
export default SignUpForm;


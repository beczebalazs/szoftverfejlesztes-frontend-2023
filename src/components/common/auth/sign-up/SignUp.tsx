import { FC } from 'react';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Button, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AuthLayout from '../auth-layout/AuthLayout';
import SignUpForm from './sign-up-form/SingUpForm';

type Input = 'email' | 'password' | 'passwordConfirmation' | 'username' | 'firstName' | 'lastName';

interface Props {
	input: Input[];
}

const SignUp: FC<Props> = props => {
	return (
		<AuthLayout>
			<Typography
				variant="h3"
				sx={{
					color: 'neutral.70',
					fontWeight: 'bold',
					fontSize: 48,
				}}
			>
				Registration
			</Typography>
			<SignUpForm input={props.input} />
		</AuthLayout>
	);
};

export default SignUp;


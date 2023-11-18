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
			<Avatar sx={{ backgroundColor: 'primary.main', marginBottom: 2 }}>
				<LockOutlinedIcon sx={{ color: 'white' }} />
			</Avatar>
			<Typography
				variant="h3"
				sx={{
					color: 'primary.main',
				}}
			>
				signupLayout.title
			</Typography>
			<SignUpForm input={props.input} />

			<Button variant="text" color="primary" href="/login" sx={{ mt: 5 }}>
				signupLayout.back
			</Button>
		</AuthLayout>
	);
};

export default SignUp;


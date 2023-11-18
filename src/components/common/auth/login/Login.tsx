import { FC } from 'react';

import { Typography } from '@mui/material';

import AuthLayout from '../auth-layout/AuthLayout';
import LoginForm from './login-form/LoginForm';

const Login: FC = () => {
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
				Login
			</Typography>
			<LoginForm />
		</AuthLayout>
	);
};

export default Login;


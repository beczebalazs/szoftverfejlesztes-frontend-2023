import { FC } from 'react';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import AuthLayout from '../auth-layout/AuthLayout';
import LoginForm from './login-form/LoginForm';

const Login: FC = () => {
	return (
		<AuthLayout >
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


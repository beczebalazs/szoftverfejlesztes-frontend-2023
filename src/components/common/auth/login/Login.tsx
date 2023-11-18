import { FC } from 'react';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import AuthLayout from '../auth-layout/AuthLayout';
import LoginForm from './login-form/LoginForm';

const Login: FC = () => {
	return (
		<AuthLayout>
			<Avatar sx={{ backgroundColor: 'primary.main', marginBottom: 2 }}>
				<LockOutlinedIcon sx={{ color: 'white' }} />
			</Avatar>
			<Typography
				variant="h3"
				sx={{
					color: 'primary.main',
					fontWeight: 'bold',
					fontSize: 40,
				}}
			>
				loginLayout.title
			</Typography>
			<LoginForm />

			<Button variant="text" color="primary" href="/sign-up" sx={{ mt: 5 }}>
				loginLayout.signUp
			</Button>
		</AuthLayout>
	);
};

export default Login;


import { FC, useState } from 'react';

import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { InputAdornment, Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import IconButton from '@mui/material/IconButton';
import { Controller } from 'react-hook-form';
import Button from '@mui/material/Button';

import useLoginForm from '../../../../../hooks/auth/useLoginForm';
// import usePostLoginMutation from '~hooks/auth/usePostLoginMutation';

const LoginForm: FC = () => {
	const [showPassword, setShowPassword] = useState(false);

	// const postLoginMutation = usePostLoginMutation();

	const form = useLoginForm();
	const { control } = form;

	// const onSubmit = (data: LoginPayload) => {
	// 	postLoginMutation.mutate({
	// 		payload: data,
	// 	});
	// };

	return (
		<Stack
			component={'form'}
			// onSubmit={handleSubmit(onSubmit)}
			alignItems="center"
			justifyContent="center"
			sx={{px:'82px'}}
		>
			<Controller
				control={control}
				name="email"
				render={({ field: { value, onChange }, fieldState: { error } }) => (
					<TextField
						sx={{ width: '100%', mt: '54px',
						".MuiInputBase-root": {height: '48px', 
						borderColor: 'neutral.70',
						borderRadius:'8px',},
						
					}}
						placeholder={'Email'}
						value={value}
						onChange={onChange}
						error={!!error}
						helperText={error ? error.message : ' '}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<EmailIcon />
								</InputAdornment>
							),
						}}
					/>
				)}
			/>
			<Controller
				control={control}
				name="password"
				render={({ field: { value, onChange }, fieldState: { error } }) => (
					<TextField
						type={showPassword ? 'text' : 'password'}
						placeholder={'Password'}
						value={value}
						onChange={onChange}
						error={!!error}
						helperText={error ? error.message : ' '}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<LockIcon />
								</InputAdornment>
							),
							endAdornment: (
								<IconButton onClick={() => setShowPassword(currState => !currState)} edge="end">
									{!showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
								</IconButton>
							),
						}}
						sx={{ 
							width:'100%', 
							".MuiInputBase-root": {	height: '48px', borderColor: 'neutral.70',
													borderRadius:'8px'}
					  }}
					/>
				)}
			/>
			<LoadingButton variant="contained" 
				// loading={postLoginMutation.isLoading}
				sx={{ mx:'60px',
				mt: 2, 
				fontWeight: 'bold', 
				fontSize: 20,
				border: '2px solid',
				borderColor: 'primary.main',
				borderRadius: '8px',
				py: 1,
				px: 7,
				width: '100%',
				color: 'neutral.10'
			}}
				type="submit"
			>
				Login
			</LoadingButton>
			<Button variant="text" color="primary" href="/sign-up"  
				sx={{
					mt: '8px',
					fontWeight: 'bold', 
					fontSize: 20,
					border: '2px solid',
					borderColor: 'primary.main',
					borderRadius: '8px',
					py: 1,
					px: 7,
					width: '100%'
					 }}>
				Sign Up
			</Button>
		</Stack>
	);
};

export default LoginForm;


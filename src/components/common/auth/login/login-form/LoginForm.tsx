import { FC, useState } from 'react';

import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { InputAdornment, Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import IconButton from '@mui/material/IconButton';
import { Controller } from 'react-hook-form';

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
			sx={{ width: 330 }}
		>
			<Controller
				control={control}
				name="email"
				render={({ field: { value, onChange }, fieldState: { error } }) => (
					<TextField
						sx={{ width: 1 / 1, mt: 3 }}
						placeholder={'loginTextfields.email'}
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
						placeholder={'loginTextfields.password'}
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
						sx={{ width: 1 / 1 }}
					/>
				)}
			/>
			<LoadingButton
				// loading={postLoginMutation.isLoading}
				sx={{ width: 1 / 1, mt: 3 }}
				type="submit"
			>
				loginTextfields.login
			</LoadingButton>
		</Stack>
	);
};

export default LoginForm;


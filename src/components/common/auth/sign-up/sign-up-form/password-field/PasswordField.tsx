import { useState } from 'react';

import LockIcon from '@mui/icons-material/Lock';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

import { SignUpInformation } from '../../../../../../types/SignUpFormInformation';

const PasswordField = () => {
	const [showPassword, setShowPassword] = useState(false);

	const { control } = useFormContext<SignUpInformation>();

	return (
		<Controller
			control={control}
			name="password"
			defaultValue=""
			render={({ field: { value, onChange }, fieldState: { error } }) => (
				<TextField
					type={showPassword ? 'text' : 'password'}
					placeholder={'signupTextfields.password'}
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
							<>
								<IconButton onClick={() => setShowPassword(prevState => !prevState)} edge="end">
									{!showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
								</IconButton>
							</>
						),
					}}
					sx={{ width: 1 / 1 }}
				/>
			)}
		/>
	);
};

export default PasswordField;


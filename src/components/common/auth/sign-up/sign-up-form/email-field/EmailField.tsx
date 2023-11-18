import EmailIcon from '@mui/icons-material/Email';
import { InputAdornment, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

import { SignUpInformation } from '../../../../../../types/SignUpFormInformation';

const EmailField = () => {
	const { control } = useFormContext<SignUpInformation>();

	return (
		<Controller
			control={control}
			name="email"
			defaultValue=""
			render={({ field: { value, onChange }, fieldState: { error } }) => (
				<TextField
					placeholder={'signupTextfields.email'}
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
					sx={{ width: 1 / 1 }}
				/>
			)}
		/>
	);
};

export default EmailField;


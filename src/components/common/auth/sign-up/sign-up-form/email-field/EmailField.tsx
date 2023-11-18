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
					sx={{ width: '100%',
					".MuiInputBase-root": {height: '48px', 
					borderColor: 'neutral.70',
					borderRadius:'8px',},
					
				}}
				/>
			)}
		/>
	);
};

export default EmailField;


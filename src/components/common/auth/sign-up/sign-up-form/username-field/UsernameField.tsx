import PersonIcon from '@mui/icons-material/Person';
import { InputAdornment, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

import { SignUpInformation } from '../../../../../../types/SignUpFormInformation';

const UsernameField = () => {
	const { control } = useFormContext<SignUpInformation>();

	return (
		<Controller
			control={control}
			name="username"
			defaultValue=""
			render={({ field: { value, onChange }, fieldState: { error } }) => (
				<TextField
					placeholder={'Username'}
					value={value}
					onChange={onChange}
					error={!!error}
					helperText={error ? error.message : ' '}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<PersonIcon />
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

export default UsernameField;


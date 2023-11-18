import PersonIcon from '@mui/icons-material/Person';
import { InputAdornment, Stack, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

import { SignUpInformation } from '../../../../../../types/SignUpFormInformation';

const FirstNameField = () => {
	const { control } = useFormContext<SignUpInformation>();

	return (
		<Stack>
			<Controller
				control={control}
				name="firstName"
				defaultValue=""
				render={({ field: { value, onChange }, fieldState: { error } }) => (
					<TextField
						placeholder={'First name'}
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
		</Stack>
	);
};

export default FirstNameField;


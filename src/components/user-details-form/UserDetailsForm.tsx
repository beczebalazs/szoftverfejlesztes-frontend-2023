import React, { useEffect, useState } from 'react';
import { Button, Container, TextField, Typography, Box } from '@mui/material';
import useGetCurrentUserQuery from '../../hooks/user/useGetCurrentUserQuery';

const UserDetailsForm = () => {
	const user = useGetCurrentUserQuery();
	console.log(11, user.data);

	const initialState = {
		firstName: '',
		lastName: '',
		email: '',
		username: '',
	};

	const [formData, setFormData] = useState(user?.data || initialState);

	useEffect(() => {
		if (user.data) {
			setFormData(user.data);
		}
	}, [user]);

	const handleChange = (event: any) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();
		console.log('Form data submitted:', formData);
	};

	return (
		<Container component="main" maxWidth="sm">
			<Typography variant="h4" component="h1" gutterBottom>
				My Account
			</Typography>
			<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
				<TextField
					margin="normal"
					required
					fullWidth
					id="firstName"
					label="First name"
					name="firstName"
					autoComplete="given-name"
					autoFocus
					value={formData.firstName}
					onChange={handleChange}
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					id="lastName"
					label="Last name"
					name="lastName"
					autoComplete="family-name"
					value={formData.lastName}
					onChange={handleChange}
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					id="Username"
					label="Username"
					name="Username"
					autoComplete="nickname"
					value={formData.username}
					onChange={handleChange}
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					id="email"
					label="Email address"
					name="email"
					autoComplete="email"
					value={formData.email}
					onChange={handleChange}
				/>
				<Typography variant="h6" component="h2" gutterBottom>
					Password change
				</Typography>
				<TextField
					margin="normal"
					fullWidth
					name="oldPassword"
					label="Old password"
					type="password"
					id="oldPassword"
					autoComplete="current-password"
					// value={formData.oldPassword}
					onChange={handleChange}
				/>
				<TextField
					margin="normal"
					fullWidth
					name="newPassword"
					label="New password"
					type="password"
					id="newPassword"
					autoComplete="new-password"
					// value={formData.newPassword}
					onChange={handleChange}
				/>
				<TextField
					margin="normal"
					fullWidth
					name="repeatNewPassword"
					label="Repeat new password"
					type="password"
					id="repeatNewPassword"
					autoComplete="new-password"
					// value={formData.repeatNewPassword}
					onChange={handleChange}
				/>
				<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
					Save Changes
				</Button>
			</Box>
		</Container>
	);
};

export default UserDetailsForm;


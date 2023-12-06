import React, { useEffect, useState } from 'react';
import {
	Button,
	Container,
	TextField,
	Typography,
	Box,
	InputAdornment,
	IconButton,
} from '@mui/material';
import useGetCurrentUserQuery from '../../hooks/user/useGetCurrentUserQuery';
import usePatchCurrentUserMutation from '../../hooks/user/usePatchCurrentUserMutation';
import PageLoading from '../common/page-loading/PageLoading';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const UserDetailsForm = () => {
	const [showPassword, setShowPassword] = useState(false);

	const user = useGetCurrentUserQuery();
	const patchCurrentUserMutation = usePatchCurrentUserMutation();

	const [username, setUsername] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [oldPassword, setOldPassword] = useState('');

	useEffect(() => {
		if (user.data) {
			setEmail(user.data?.email);
			setFirstName(user.data?.firstName);
			setLastName(user.data?.lastName);
			setUsername(user.data?.username);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user.isSuccess]);

	const handleSubmit = () => {
		patchCurrentUserMutation.mutate({
			id: user?.data?._id!,
			payload: { username, firstName, lastName, email, password, oldPassword },
		});
	};

	if (user.isLoading) return <PageLoading />;

	return (
		<Container component="main" maxWidth="sm">
			<Typography variant="h4" component="h1" gutterBottom>
				My Account
			</Typography>
			<Box sx={{ mt: 1 }}>
				<TextField
					margin="normal"
					required
					fullWidth
					id="outlined-controlled"
					label="First name"
					value={firstName}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						setFirstName(event.target.value);
					}}
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					id="lastName"
					label="Last name"
					value={lastName}
					onChange={event => setLastName(event.target.value)}
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					id="Username"
					label="Username"
					value={username}
					onChange={event => setUsername(event.target.value)}
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					id="email"
					label="Email address"
					value={email}
					onChange={event => setEmail(event.target.value)}
				/>
				<Typography variant="h6" component="h2" gutterBottom>
					Password change
				</Typography>
				<TextField
					margin="normal"
					fullWidth
					label="Old password"
					type={showPassword ? 'text' : 'password'}
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
					value={oldPassword}
					onChange={event => setOldPassword(event.target.value)}
				/>
				<TextField
					margin="normal"
					fullWidth
					label="New password"
					type={showPassword ? 'text' : 'password'}
					value={password}
					onChange={event => setPassword(event.target.value)}
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
				/>
				<Button onClick={handleSubmit} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
					Save Changes
				</Button>
			</Box>
		</Container>
	);
};

export default UserDetailsForm;


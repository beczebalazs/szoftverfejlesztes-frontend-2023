import { Box, Divider, Unstable_Grid2 as Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../../../../hooks/redux/redux';
import { DrawerWidth } from '../../../../constants/constants';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';

const Footer = () => {
	const isOpen = useAppSelector(state => state.navigation.sidebar.isOpen);

	return (
		<Box
			sx={{
				bgcolor: 'secondary.main',
				width: isOpen ? `calc(100% - ${DrawerWidth}px)` : '100%',
				ml: isOpen ? `${DrawerWidth}px` : 0,
			}}
		>
			<Grid container sx={{ p: 2 }}>
				<Grid xxs={4}>
					<img src={'/images/logo.svg'} alt="Logo" />
				</Grid>
				<Grid xxs={4} sx={{ color: 'white' }}>
					<Stack gap={2}>
						<Typography variant="h6" sx={{ color: 'neutral.light' }}>
							Learn More
						</Typography>
						<Typography variant="body2">About Us</Typography>
						<Typography variant="body2">Environment</Typography>
						<Typography variant="body2">Privacy Policy</Typography>
						<Typography variant="body2">Contact Us</Typography>
					</Stack>
				</Grid>
				<Grid xxs={4} sx={{ color: 'white' }}>
					<Stack gap={2}>
						<Typography variant="h6" sx={{ color: 'neutral.light' }}>
							Contact Us
						</Typography>
						<Typography
							variant="body2"
							sx={{
								color: 'neutral.light',
								display: 'flex',
								alignItems: 'center',
								mr: 2,
								gap: 0.5,
							}}
						>
							<EmailOutlinedIcon />
							Email: loremipsum@gmail.com
						</Typography>
						<Typography
							variant="body2"
							sx={{
								color: 'neutral.light',
								display: 'flex',
								alignItems: 'center',
								mr: 2,
								gap: 0.5,
							}}
						>
							<LocalPhoneOutlinedIcon />
							Phone: (123)-456-789
						</Typography>
						<Typography
							variant="body2"
							sx={{
								color: 'neutral.light',
								display: 'flex',
								alignItems: 'center',
								mr: 2,
								gap: 0.5,
							}}
						>
							<LocationOnOutlinedIcon />
							Address: 123 Lorem Ipsum 12
						</Typography>
					</Stack>
				</Grid>
				<Divider sx={{ width: '100%', borderColor: 'gray', mt: '25px', mb: '25px' }} />
				<Grid xxs={12}>
                    <Stack direction='row' justifyContent='center' alignItems='center' gap={1}>
                        <CopyrightOutlinedIcon sx={{color: 'gray'}} />
					<Typography sx={{ color: 'gray' }}>
						2023 | All Rights Reserved
					</Typography>
                    </Stack>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Footer;


import React from 'react';
import MainLayout from '../components/common/main-layout/MainLayout';
import { Stack, Typography } from '@mui/material';

const HomePage = () => {
	return (
		<MainLayout>
			<Stack>
				<Typography sx={{ color: 'black' }}>Homepage</Typography>
			</Stack>
		</MainLayout>
	);
};

export default HomePage;


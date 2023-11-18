import MainLayout from '../components/common/main-layout/MainLayout';
import { Stack } from '@mui/material';
import HomeDescription from '../components/home/home-description/HomeDescription';
import HomeCategories from '../components/home/home-categories/HomeCategories';
import HomeTopOffers from '../components/home/home-top-offers/HomeTopOffers';

const HomePage = () => {
	return (
		<MainLayout>
			<Stack>
				<HomeDescription />
			</Stack>
			<Stack sx={{ my: 5 }}>
				<HomeCategories />
			</Stack>
			<Stack sx={{ my: 5 }}>
				<HomeTopOffers />
			</Stack>
		</MainLayout>
	);
};

export default HomePage;


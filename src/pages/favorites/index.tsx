import React from 'react';
import MainLayout from '../../components/common/main-layout/MainLayout';
import { Unstable_Grid2 as Grid, Stack, Typography } from '@mui/material';
import ProductCard from '../../components/products/product-card/ProductCard';
import { selectFavorites } from '../../store/favorites/favorites.selector';
import { useSelector } from 'react-redux';

const FavoritesPage = () => {
	const favorites = useSelector(selectFavorites);

	return (
		<MainLayout>
			{favorites.length === 0 ? (
				<Stack alignItems={'center'} justifyContent="center">
					<Typography>You don't have any favorites!</Typography>
				</Stack>
			) : (
				<Grid container>
					<Stack sx={{ mb: 2 }}>
						<Typography variant="h4">Favorites</Typography>
						<Typography variant="body1">{favorites.length} favorites</Typography>
					</Stack>

					<Grid container spacing={4} xs={12}>
						{favorites?.map((data: any) => (
							<Grid xs={'auto'} key={data.id}>
								<ProductCard
									key={data.id}
									id={data.id}
									title={data.title}
									price={data.price}
									image={data.image}
									rating={data.rating}
								/>
							</Grid>
						))}
					</Grid>
				</Grid>
			)}
		</MainLayout>
	);
};

export default FavoritesPage;


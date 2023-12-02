import { Unstable_Grid2 as Grid, Typography } from '@mui/material';
import ProductCard from '../../../components/products/product-card/ProductCard';
import useProductsQuery from '../../../hooks/products/useProductsQuery';

const HomeTopOffers = () => {
	const phones = useProductsQuery('phones');
	return (
		<Grid container spacing={4}>
			<Grid xs={12}>
				<Typography variant="h4">Top offers</Typography>
			</Grid>
			<Grid container spacing={4} xs={12}>
				{phones.data?.map((data: any) => (
					<Grid xs={'auto'} key={data.id}>
						<ProductCard
							key={data.id}
							id={data.id}
							title={data.title}
							price={data.price}
							image={data.images?.[0]}
							rating={data.rating}
						/>
					</Grid>
				))}
			</Grid>
		</Grid>
	);
};

export default HomeTopOffers;


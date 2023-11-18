import { Unstable_Grid2 as Grid, Typography } from '@mui/material';
import ProductCard from '../../../components/products/product-card/ProductCard';
import usePhonesQuery from '../../../hooks/phones/usePhonesQuery';

const HomeTopOffers = () => {
	const phones = usePhonesQuery();
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
							image={data.image}
							rating={data.rating}
						/>
					</Grid>
				))}
			</Grid>
		</Grid>
	);
};

export default HomeTopOffers;


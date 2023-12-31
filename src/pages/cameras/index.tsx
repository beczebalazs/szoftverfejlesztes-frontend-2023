import React from 'react';
import MainLayout from '../../components/common/main-layout/MainLayout';
import { Unstable_Grid2 as Grid, Stack } from '@mui/material';
import ProductCard from '../../components/products/product-card/ProductCard';
import ProductsFilter from '../../components/products/products-filter/ProductsFilter';
import useProductsQuery from '../../hooks/products/useProductsQuery';

const CamerasPage = () => {
	const cameras = useProductsQuery('cameras');
	return (
		<MainLayout>
			<Grid container spacing={4}>
				<Grid xs={2}>
					<Stack direction="column" gap={4}>
						<ProductsFilter
							title="Price"
							options={['1-100', '100-200', '300-400', '400-500', '500-600', '600+']}
						/>
						<ProductsFilter
							title="Brand"
							options={['Samsung', 'Iphone', 'Xiaomi', 'Huawei', 'Google', 'LG']}
						/>
					</Stack>
				</Grid>
				<Grid container spacing={4} xs={10}>
					{cameras.data?.map((data: any) => (
						<Grid xs={'auto'} key={data.id}>
							<ProductCard
								key={data.id}
								_id={data.id}
								title={data.title}
								price={data.price}
								image={data.images?.[0]}
								rating={data.rating}
							/>
						</Grid>
					))}
				</Grid>
			</Grid>
		</MainLayout>
	);
};

export default CamerasPage;


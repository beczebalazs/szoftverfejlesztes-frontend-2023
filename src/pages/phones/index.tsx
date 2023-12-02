import React, { ChangeEvent, useState } from 'react';
import MainLayout from '../../components/common/main-layout/MainLayout';
import { Unstable_Grid2 as Grid, Stack } from '@mui/material';
import ProductCard from '../../components/products/product-card/ProductCard';
import ProductsFilter from '../../components/products/products-filter/ProductsFilter';
import useProductsQuery from '../../hooks/products/useProductsQuery';
import { FooterPagination } from '../../components/common/footer-pagination/FooterPagination';

const PhonesPage = () => {
	const phones = useProductsQuery('phones');
	const [currentPage, setCurrentPage] = useState(1);

	const itemsPerPage = 1;
	const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
		setCurrentPage(value);
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	const filteredPhones = phones.data?.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage,
	);

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
					{filteredPhones?.map((data: any) => (
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
					<Grid xs={12} >
						<FooterPagination
							currentPage={currentPage}
							handlePageChange={handlePageChange}
							dataLength={phones.data?.length}
							itemsPerPage={itemsPerPage}
						/>
					</Grid>
				</Grid>
			</Grid>
		</MainLayout>
	);
};

export default PhonesPage;


import React, { ChangeEvent, useState } from 'react';
import MainLayout from '../../components/common/main-layout/MainLayout';
import { Unstable_Grid2 as Grid, Stack, Typography } from '@mui/material';
import ProductCard from '../../components/products/product-card/ProductCard';
import ProductsFilter from '../../components/products/products-filter/ProductsFilter';
import useProductsQuery from '../../hooks/products/useProductsQuery';
import { FooterPagination } from '../../components/common/footer-pagination/FooterPagination';

const PhonesPage = () => {
	const phones = useProductsQuery('phones');
	const [currentPage, setCurrentPage] = useState(1);
	const [priceFilter, setPriceFilter] = useState<string[]>([]);
	const [brandFilter, setBrandFilter] = useState<string[]>([]);

	const itemsPerPage = 6;
	const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
		setCurrentPage(value);
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	const parsePriceRange = (range: string) => {
		if (range === "600+") {
			return { min: 600, max: Number.MAX_SAFE_INTEGER };
		}
	
		const [min, max] = range.split('-').map(Number);
		return { min, max };
	};

	const isInPriceRange = (price: number, ranges: Array<{ min: number; max: number }>) => {
		return ranges.some(range => price >= range.min && price <= range.max);
	};

	const priceRanges = priceFilter?.map(parsePriceRange);

	const filteredPhones = phones.data?.filter((phone: any) => {
		const priceMatch = priceRanges.length === 0 || isInPriceRange(phone.price, priceRanges);
		const brandMatch =
			brandFilter.length === 0 ||
			brandFilter.map(brand => brand.toLowerCase()).includes(phone.brand.toLowerCase());
		return priceMatch && brandMatch;
	});

	const paginatedPhones = filteredPhones?.slice(
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
							setFilter={setPriceFilter}
							selectedFilters={priceFilter}
						/>
						<ProductsFilter
							title="Brand"
							options={['Samsung', 'Iphone', 'Xiaomi', 'Huawei', 'Google', 'LG', 'Motorola']}
							setFilter={setBrandFilter}
							selectedFilters={brandFilter}
						/>
					</Stack>
				</Grid>
				<Grid container spacing={4} xs={10}>
					{paginatedPhones?.length === 0 && (
						<Stack alignItems={'center'} justifyContent={'center'} width={1 / 1}>
							<Typography variant="h5">No product found!</Typography>
						</Stack>
					)}
					{paginatedPhones?.map((data: any) => (
						<Grid xs={'auto'} key={data._id}>
							<ProductCard
								key={data._id}
								_id={data._id}
								title={data.title}
								price={data.price}
								image={data.images?.[0]}
								rating={data.rating}
							/>
						</Grid>
					))}
					{paginatedPhones?.length !== 0 && (
						<Grid xs={12}>
							<FooterPagination
								currentPage={currentPage}
								handlePageChange={handlePageChange}
								dataLength={filteredPhones?.length}
								itemsPerPage={itemsPerPage}
							/>
						</Grid>
					)}
				</Grid>
			</Grid>
		</MainLayout>
	);
};

export default PhonesPage;


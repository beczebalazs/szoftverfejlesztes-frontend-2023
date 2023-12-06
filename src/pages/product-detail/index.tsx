import React from 'react';
import MainLayout from '../../components/common/main-layout/MainLayout';
import { Grid, Stack } from '@mui/material';
import ImageArea from '../../components/product-detail/image-area/ImageArea';
import TitleArea from '../../components/product-detail/title-area/TitleArea';
import ProductDetailTabs from '../../components/product-detail/product-detail-tabs/ProductDetailTabs';
import SimilarProducts from '../../components/product-detail/similar-products/SimilarProducts';
import { useParams } from 'react-router-dom';
import useProductByIdQuery from '../../hooks/products/useProductByIdQuery';
import PageLoading from '../../components/common/page-loading/PageLoading';

const ProductDetailPage = () => {
	const { id } = useParams();
	const productQuery = useProductByIdQuery(id!);

	if (productQuery.isLoading) return <PageLoading />;

	return (
		<MainLayout>
			<Grid container>
				<Grid xs={8}>
					<Stack alignItems={'center'} justifyContent={'center'} width={1 / 1} height={1 / 1}>
						<ImageArea images={productQuery.data?.images} />
					</Stack>
				</Grid>
				<Grid xs={4} sx={{ pr: 10 }}>
					<Stack alignItems={'center'} justifyContent={'center'} width={1 / 1} height={1 / 1}>
						<TitleArea
							title={productQuery.data?.title}
							shortDescription={productQuery.data?.shortDescription}
							rating={productQuery.data?.rating}
							price={productQuery.data?.price}
						/>
					</Stack>
				</Grid>
				<Grid xs={12} sx={{ mt: 5 }}>
					<ProductDetailTabs longDescription={productQuery.data?.longDescription} />
				</Grid>
				<Grid xs={12} sx={{ mt: 5 }}>
					<SimilarProducts />
				</Grid>
			</Grid>
		</MainLayout>
	);
};

export default ProductDetailPage;


import React from 'react';
import MainLayout from '../../components/common/main-layout/MainLayout';
import { Grid, Stack } from '@mui/material';
import ImageArea from '../../components/product-detail/image-area/ImageArea';
import TitleArea from '../../components/product-detail/title-area/TitleArea';
import ProductDetailTabs from '../../components/product-detail/product-detail-tabs/ProductDetailTabs';
import SimilarProducts from '../../components/product-detail/similar-products/SimilarProducts';

const ProductDetailPage = () => {
	return (
		<MainLayout>
			<Grid container>
				<Grid xs={8}>
					<Stack alignItems={'center'} justifyContent={'center'} width={1 / 1} height={1 / 1}>
						<ImageArea />
					</Stack>
				</Grid>
				<Grid xs={4} sx={{ pr: 10 }}>
					<Stack alignItems={'center'} justifyContent={'center'} width={1 / 1} height={1 / 1}>
						<TitleArea />
					</Stack>
				</Grid>
				<Grid xs={12} sx={{ mt: 5 }}>
					<ProductDetailTabs />
				</Grid>
				<Grid xs={12} sx={{ mt: 5 }}>
					<SimilarProducts />
				</Grid>
			</Grid>
		</MainLayout>
	);
};

export default ProductDetailPage;


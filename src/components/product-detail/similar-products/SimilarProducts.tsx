import React from 'react';
import { Stack, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import usePhonesQuery from '../../../hooks/phones/usePhonesQuery';
import ProductCard from '../../products/product-card/ProductCard';

const SimilarProducts = () => {
	const phones = usePhonesQuery();

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
	};

	return (
		<Stack>
			<Typography variant="h4">More Like This</Typography>
			<Slider {...settings}>
				{phones.data?.map((data: any) => (
					<div key={data.id}>
						<ProductCard
							id={data.id}
							title={data.title}
							price={data.price}
							image={data.image}
							rating={data.rating}
						/>
					</div>
				))}
				{phones.data?.map((data: any) => (
					<div key={data.id}>
						<ProductCard
							id={data.id}
							title={data.title}
							price={data.price}
							image={data.image}
							rating={data.rating}
						/>
					</div>
				))}
			</Slider>
		</Stack>
	);
};

export default SimilarProducts;


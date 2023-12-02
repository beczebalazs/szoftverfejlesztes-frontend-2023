import React from 'react';
import Slider from 'react-slick';
import { Typography, Box } from '@mui/material';
import categories from '../../../mocks/homeCategories.json';
import CategoriesCard from './categories-card/CategoriesCard';

const HomeCategories = () => {
	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
	};

	return (
		<Box sx={{ maxWidth: '100%' }}>
			<Typography variant="h4" gutterBottom
			sx={{
				pb:'48px',
				pt: '48px'
			}}>
				Popular Categories
			</Typography>
			<Slider {...sliderSettings}>
				{categories.map(category => (
					<Box key={category.title} sx={{textAlign: 'left'}}>
						<CategoriesCard {...category} />
					</Box>
				))}
			</Slider>
		</Box>
	);
};

export default HomeCategories;


import { FC } from 'react';

import { Box, Button, Paper, Rating, Stack, Typography } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PhoneImage from './iphone14.jpg';

interface Props {
	id: string;
	image?: string;
	title: string;
	price: number;
	rating: number;
}

const ProductCard: FC<Props> = props => {
	return (
		<Paper
			elevation={0}
			sx={{
				position: 'relative',
				borderRadius: 2,
				border: 1,
				borderColor: 'grey.300',
				px: 3,
				py: 1,
				width: 200,
				height: 350,
				cursor: 'pointer',
			}}
		>
			<Stack alignItems="center" sx={{ height: 1 / 1 }}>
				<FavoriteBorderOutlinedIcon />
				<Box
					component="img"
					src={PhoneImage}
					alt="product image"
					sx={{ width: 1 / 1, objectFit: 'contain', height: 200 }}
				/>

				<Typography
					variant="body2"
					align="center"
					sx={{
						mt: 1,
						color: '#616161',
						overflow: 'hidden',
						display: '-webkit-box',
						WebkitBoxOrient: 'vertical',
						WebkitLineClamp: '2',
					}}
				>
					{props.title}
				</Typography>
				<Typography
					variant="body2"
					align="center"
					sx={{ mt: 'auto', color: '#9B9B9B', fontSize: 16 }}
				>
					{props.price} $
				</Typography>
				<Rating value={props.rating} name="read-only" />
				<Stack direction={'row'} alignItems={'center'} spacing={2}>
					<Button
						color="primary"
						variant="contained"
						sx={{ px: 1, color: 'white', borderRadius: '8px' }}
						startIcon={<ShoppingCartOutlinedIcon />}
					>
						Add to cart
					</Button>
				</Stack>
			</Stack>
		</Paper>
	);
};

export default ProductCard;


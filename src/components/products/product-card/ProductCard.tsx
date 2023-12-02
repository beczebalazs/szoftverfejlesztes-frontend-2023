import { FC } from 'react';

import { Box, Button, Paper, Rating, Stack, Typography } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../../store/favorites/favorites.selector';
import { addFavorite, removeFavorite } from '../../../store/favorites/favorites.slice';

interface Props {
	id: string;
	image?: string;
	title: string;
	price: number;
	rating: number;
}

const ProductCard: FC<Props> = props => {
	const dispatch = useDispatch();

	const favorite = useSelector(selectFavorites);
	
	const isFavorite = favorite.some(fav => fav.id === props.id);
	
	function handleFavoriteClick() {
		if (isFavorite) {
			dispatch(removeFavorite(props));
		} else {
			dispatch(addFavorite(props));
		}
	}
	return (
		<Paper
			elevation={0}
			sx={{
				position: 'relative',
				borderRadius: '8px',
				border: 1,
				borderColor: 'neutral.30',
				px: 3,
				py: 1,
				width: 302,
				height: 'auto',
				cursor: 'pointer',
			}}
		>
			<Stack alignItems="left" sx={{ height: 1 / 1, pb: 2 }}>
				<Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
					{isFavorite ? (
						<FavoriteIcon onClick={handleFavoriteClick} />
					) : (
						<FavoriteBorderOutlinedIcon onClick={handleFavoriteClick} />
					)}
				</Box>
				<Box
					component="img"
					src={props.image}
					alt="product image"
					sx={{ width: '268px', objectFit: 'contain', height: 200 }}
				/>

				<Typography
					variant="body2"
					align="left"
					sx={{
						mt: 1,
						color: '#616161',
						overflow: 'hidden',
						display: '-webkit-box',
						WebkitBoxOrient: 'vertical',
						WebkitLineClamp: '2',
						fontSize: 20,
						textAlign: 'left',
					}}
				>
					{props.title}
				</Typography>
				<Rating value={props.rating} name="read-only" readOnly />
				<Typography
					variant="body2"
					sx={{
						mt: 'auto',
						color: 'neutral.70',
						fontSize: 16,
						fontWeight: 'bold',
						textAlign: 'left',
						marginBottom: '12px',
					}}
				>
					{props.price} $
				</Typography>

				<Stack direction={'row'} alignItems={'center'} spacing={2}>
					<Button
						color="primary"
						variant="contained"
						sx={{ width: '100%', color: 'neutral.10', borderRadius: '8px', marginRight: '15px' }}
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


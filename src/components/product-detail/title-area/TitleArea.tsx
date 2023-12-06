import { Button, Rating, Stack, Typography } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../../store/favorites/favorites.selector';
import { addItem } from '../../../store/my-cart/slice';
import { addFavorite, removeFavorite } from '../../../store/favorites/favorites.slice';
import { useParams } from 'react-router-dom';
import useProductsQuery from '../../../hooks/products/useProductsQuery';

interface Props {
	title: string;
	shortDescription: string;
	rating: number;
	price: number;
}

const TitleArea: FC<Props> = props => {
	const dispatch = useDispatch();

	const { id } = useParams();

	const favorite = useSelector(selectFavorites);

	const productQuery = useProductsQuery('phones');

	const findProduct = productQuery.data?.find((product: any) => product._id === id);

	const product = {
		...findProduct,
		image: findProduct.images[0],
	};

	const isFavorite = favorite.some(fav => fav._id === id);

	const handleAddToCart = () => {
		dispatch(addItem(product));
	};

	function handleFavoriteClick() {
		if (isFavorite) {
			dispatch(removeFavorite(product));
		} else {
			dispatch(addFavorite(product));
		}
	}
	return (
		<Stack direction="column">
			<Typography sx={{ fontSize: '32px', fontWeight: 'bold', mb: 2 }}>{props.title}</Typography>
			<Typography variant="body2" sx={{ mb: 2 }}>
				{props.shortDescription}
			</Typography>
			<Stack alignItems="center" direction="row" sx={{ color: 'primary.main' }}>
				{props.rating > 0 ? (
					<Rating value={props.rating} precision={0.5} name="read-only" readOnly />
				) : (
					<Typography variant="body2">Add the first review!</Typography>
				)}
			</Stack>
			<Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
				${props.price}
			</Typography>
			<Button
				color="primary"
				variant="contained"
				sx={{
					width: '100%',
					fontWeight: 'bold',
					color: 'neutral.10',
					borderRadius: '8px',
					marginRight: '15px',
					marginBottom: '8px',
				}}
				startIcon={<ShoppingCartOutlinedIcon />}
				onClick={handleAddToCart}
			>
				Add to cart
			</Button>
			<Button
				color="primary"
				variant="outlined"
				sx={{
					width: '100%',
					color: 'primary.main',
					borderRadius: '8px',
					marginRight: '15px',
					fontWeight: 'bold',
				}}
				startIcon={<FavoriteBorderOutlinedIcon />}
				onClick={handleFavoriteClick}
			>
				{isFavorite ? 'Remove from favorites' : 'Add to favorites'}
			</Button>
		</Stack>
	);
};

export default TitleArea;


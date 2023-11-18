import { Button, Rating, Stack, Typography } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const TitleArea = () => {
	return (
		<Stack direction="column">
			<Typography variant="h3">Iphone 13 pro max</Typography>
			<Typography variant="body1">
				Lorem ipsum dolor sit ertga af vitae sit consectetur. Sit a pulvinar ut vitae ac. Lectus
				aliquam ullamcorper quam mi augue.
			</Typography>
			<Stack alignItems={'centers'} direction={'row'}>
				<Rating value={5} name="read-only" readOnly /> 5 (120 review)
			</Stack>
			<Typography variant="h5">$1000</Typography>
			<Button
				color="primary"
				variant="contained"
				sx={{ width: '100%', color: 'neutral.10', borderRadius: '8px', marginRight: '15px' }}
				startIcon={<ShoppingCartOutlinedIcon />}
			>
				Add to cart
			</Button>
			<Button
				color="primary"
				variant="outlined"
				sx={{ width: '100%', color: 'primary.main', borderRadius: '8px', marginRight: '15px' }}
				startIcon={<FavoriteBorderOutlinedIcon />}
			>
				Add to favorites
			</Button>
		</Stack>
	);
};

export default TitleArea;


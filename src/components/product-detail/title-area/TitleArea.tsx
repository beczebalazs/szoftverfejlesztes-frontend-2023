import { Button, Rating, Stack, Typography } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const TitleArea = () => {
	return (
		<Stack direction="column">
			<Typography sx={{ fontSize: '32px', fontWeight:'bold', mb: 2}}>Iphone 13 pro max</Typography>
			<Typography variant="body2" sx={{mb: 2}}>
				Lorem ipsum dolor sit ertga af vitae sit consectetur. Sit a pulvinar ut vitae ac. Lectus
				aliquam ullamcorper quam mi augue.
			</Typography>
			<Stack alignItems="center" direction="row" sx={{ color: 'primary.main' }}>
  				<Rating value={5} name="read-only" readOnly />
  				<Typography variant="body2" sx={{ marginLeft: 1 }}>
					5 (120 reviews)
  				</Typography>
			</Stack>
			<Typography variant="h6" sx={{fontWeight:'bold', mb: 2}}>$1000</Typography>
			<Button
				color="primary"
				variant="contained"
				sx={{ width: '100%', fontWeight:'bold',  color: 'neutral.10', borderRadius: '8px', marginRight: '15px', marginBottom:'8px' }}
				startIcon={<ShoppingCartOutlinedIcon />}
			>
				Add to cart
			</Button>
			<Button
				color="primary"
				variant="outlined"
				sx={{ width: '100%', color: 'primary.main', borderRadius: '8px', marginRight: '15px', fontWeight:'bold' }}
				startIcon={<FavoriteBorderOutlinedIcon />}
			>
				Add to favorites
			</Button>
		</Stack>
	);
};

export default TitleArea;


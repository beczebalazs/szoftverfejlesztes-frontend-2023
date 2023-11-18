import React, { useState } from 'react';
import {
	Container,
	Grid,
	Typography,
	Card,
	CardContent,
	CardMedia,
	CardActions,
	Button,
	IconButton,
	Box,
	TextField,
	FormControlLabel,
	Radio,
	RadioGroup,
	Divider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useNavigate } from 'react-router-dom';

const MyCart = () => {
	const [quantity, setQuantity] = useState(3);
	const [shipping, setShipping] = useState('free');

	const navigate = useNavigate();

	const handleQuantityChange = (newQuantity: number) => {
		setQuantity(newQuantity);
	};

	const handleShippingChange = (event: any) => {
		setShipping(event.target.value);
	};

	const products = [
		{
			id: 1,
			name: 'Lorem Ipsum',
			price: 240.0,
			image:
				'https://s13emagst.akamaized.net/products/40685/40684413/images/res_16a3a662e1b74dd715c857686c585cd7.jpg',
			description: 'Lorem ipsum dolor',
		},
		{
			id: 2,
			name: 'Lorem Ipsum',
			price: 240.0,
			image:
				'https://s13emagst.akamaized.net/products/40685/40684413/images/res_16a3a662e1b74dd715c857686c585cd7.jpg',
			description: 'Lorem ipsum dolor',
		},
	];

	const subtotal = products.reduce((total, product) => total + product.price * quantity, 0);
	const shippingCost = shipping === 'free' ? 0 : 15.0;
	const total = subtotal + shippingCost;

	return (
		<Container maxWidth="lg">
			<Typography variant="h4" gutterBottom>
				My Cart
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} md={8}>
					{products.map(product => (
						<>
							<Card key={product.id} sx={{ display: 'flex', mb: 2, boxShadow: 'none' }}>
								<CardMedia
									component="img"
									sx={{ width: 151 }}
									image={product.image}
									alt={product.name}
								/>
								<Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
									<CardContent sx={{ flex: '1 0 auto' }}>
										<Typography component="div" variant="h6">
											{product.name}
										</Typography>
										<Typography variant="subtitle1" color="text.secondary" component="div">
											{product.description}
										</Typography>
									</CardContent>
									<CardActions>
										<IconButton
											onClick={() => handleQuantityChange(quantity - 1)}
											disabled={quantity <= 1}
										>
											<RemoveIcon />
										</IconButton>
										<TextField
											size="small"
											value={quantity}
											onChange={e => handleQuantityChange(Number(e.target.value))}
										/>
										<IconButton onClick={() => handleQuantityChange(quantity + 1)}>
											<AddIcon />
										</IconButton>
										<Typography sx={{ ml: 2 }}>${(product.price * quantity).toFixed(2)}</Typography>
										<IconButton
											onClick={() => {
												/* Termék törlése */
											}}
										>
											<DeleteIcon />
										</IconButton>
									</CardActions>
								</Box>
							</Card>
							<Divider sx={{ my: 2 }} />
						</>
					))}
				</Grid>
				<Grid item xs={12} md={4}>
					<Card>
						<CardContent>
							<Typography variant="h6">Cart summary</Typography>
							<RadioGroup value={shipping} onChange={handleShippingChange}>
								<FormControlLabel value="free" control={<Radio />} label="Free shipping" />
								<FormControlLabel
									value="express"
									control={<Radio />}
									label="Express shipping +$15.00"
								/>
							</RadioGroup>
							<Typography>Subtotal</Typography>
							<Typography>${subtotal.toFixed(2)}</Typography>
							<Typography>Total</Typography>
							<Typography>${total.toFixed(2)}</Typography>
						</CardContent>
						<CardActions>
							<Button
								fullWidth
								variant="contained"
								color="primary"
								onClick={() => navigate('/checkout')}
							>
								Checkout
							</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

export default MyCart;


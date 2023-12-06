import React, { useState } from 'react';
import { Box, Container, Typography, Grid, TextField, Button } from '@mui/material';
import CheckoutOrderSummary from './ckeckout-order-summary/CheckoutOrderSummary';
import { useSelector } from 'react-redux';
import { userIdSelector } from '../../store/auth/selector';
import { selectCart } from '../../store/my-cart/selector';
import usePostOrderMutation from '../../hooks/order/usePostOrderMutation';

const CheckoutForm = () => {
	const isLoggedIn = useSelector(userIdSelector);
	const cartItems = useSelector(selectCart);

	const products = cartItems.map(item => ({
		id: item.data._id,
		quantity: item.quantity,
	}));

	const date = new Date().toLocaleDateString();

	const [price, setPrice] = useState(0);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [street, setStreet] = useState('');
	const [country, setCountry] = useState('');
	const [city, setCity] = useState('');
	const [houseNumber, setHouseNumber] = useState('');
	const [zipCode, setZipCode] = useState('');

	const postOrderMutation = usePostOrderMutation();

	const handleSubmit = () => {
		postOrderMutation.mutate({
			payload: {
				userId: isLoggedIn,
				price: price.toFixed(2),
				products: products,
				firstName: firstName,
				lastName: lastName,
				email: email,
				street: street,
				country: country,
				city: city,
				zipCode: zipCode,
				houseNumber: houseNumber,
				date: date,
			} as any,
		});
	};

	return (
		<Container maxWidth="lg">
			<Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
				Checkout
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} md={7}>
					<Box sx={{ border: '1px solid #BDBFBD', borderRadius: '8px', boxShadow: 'none', p: 2 }}>
						<Typography variant="h6">Contact information</Typography>
						<div style={{ display: 'flex', gap: '16px' }}>
							<TextField
								required
								label="First name"
								fullWidth
								margin="normal"
								sx={{ '.MuiInputBase-root': { borderColor: 'neutral.70', borderRadius: '8px' } }}
								value={firstName}
								onChange={event => setFirstName(event.target.value)}
							/>
							<TextField
								required
								label="Last name"
								fullWidth
								margin="normal"
								sx={{ '.MuiInputBase-root': { borderColor: 'neutral.70', borderRadius: '8px' } }}
								value={lastName}
								onChange={event => setLastName(event.target.value)}
							/>
						</div>
						<TextField
							required
							label="Email address"
							fullWidth
							margin="normal"
							sx={{ '.MuiInputBase-root': { borderColor: 'neutral.70', borderRadius: '8px' } }}
							value={email}
							onChange={event => setEmail(event.target.value)}
						/>
						<Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
							Shipping address
						</Typography>
						<TextField
							required
							label="Street address"
							fullWidth
							margin="normal"
							sx={{ '.MuiInputBase-root': { borderColor: 'neutral.70', borderRadius: '8px' } }}
							value={street}
							onChange={event => setStreet(event.target.value)}
						/>
						<TextField
							required
							label="Country"
							fullWidth
							margin="normal"
							sx={{ '.MuiInputBase-root': { borderColor: 'neutral.70', borderRadius: '8px' } }}
							value={country}
							onChange={event => setCountry(event.target.value)}
						/>
						<TextField
							required
							label="Town / City"
							fullWidth
							margin="normal"
							sx={{ '.MuiInputBase-root': { borderColor: 'neutral.70', borderRadius: '8px' } }}
							value={city}
							onChange={event => setCity(event.target.value)}
						/>
						<TextField
							label="House number"
							fullWidth
							margin="normal"
							sx={{ '.MuiInputBase-root': { borderColor: 'neutral.70', borderRadius: '8px' } }}
							value={houseNumber}
							onChange={event => setHouseNumber(event.target.value)}
						/>
						<TextField
							required
							label="Zip code"
							fullWidth
							margin="normal"
							sx={{ '.MuiInputBase-root': { borderColor: 'neutral.70', borderRadius: '8px' } }}
							value={zipCode}
							onChange={event => setZipCode(event.target.value)}
						/>

						<Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
							Payment information
						</Typography>
						<TextField
							required
							label="Card number"
							fullWidth
							margin="normal"
							sx={{ '.MuiInputBase-root': { borderColor: 'neutral.70', borderRadius: '8px' } }}
						/>
						<div style={{ display: 'flex', gap: '16px' }}>
							<TextField
								required
								label="Expiry date"
								fullWidth
								margin="normal"
								sx={{ '.MuiInputBase-root': { borderColor: 'neutral.70', borderRadius: '8px' } }}
							/>
							<TextField
								required
								label="CVC code"
								fullWidth
								margin="normal"
								sx={{ '.MuiInputBase-root': { borderColor: 'neutral.70', borderRadius: '8px' } }}
							/>
						</div>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{
								mt: '8px',
								fontWeight: 'bold',
								fontSize: 20,
								border: '2px solid',
								borderColor: 'primary.main',
								borderRadius: '8px',
								width: '100%',
								color: 'white',
								mb: '24px',
							}}
							onClick={handleSubmit}
						>
							Place order
						</Button>
					</Box>
				</Grid>
				<Grid item xs={12} md={5}>
					<CheckoutOrderSummary setPrice={setPrice} />
				</Grid>
			</Grid>
		</Container>
	);
};

export default CheckoutForm;


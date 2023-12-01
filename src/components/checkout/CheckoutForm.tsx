import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button } from '@mui/material';
import CheckoutOrderSummary from './ckeckout-order-summary/CheckoutOrderSummary';

const CheckoutForm = () => {
	const handleSubmit = (event: any) => {
		event.preventDefault();
	};

	return (
		<Container maxWidth="lg">
			<Typography variant="h4" gutterBottom>
				Checkout
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} md={7}>
					<Box component="form" onSubmit={handleSubmit} noValidate>
						<Typography variant="h6">Contact information</Typography>
						<TextField required label="First name" fullWidth margin="normal" />
						<TextField required label="Last name" fullWidth margin="normal" />
						<TextField required label="Email address" fullWidth margin="normal" />

						<Typography variant="h6" gutterBottom>
							Shipping address
						</Typography>
						<TextField required label="Street address" fullWidth margin="normal" />
						<TextField required label="Country" fullWidth margin="normal" />
						<TextField required label="Town / City" fullWidth margin="normal" />
						<TextField label="State" fullWidth margin="normal" />
						<TextField required label="Zip code" fullWidth margin="normal" />

						<Typography variant="h6" gutterBottom>
							Payment information
						</Typography>
						<TextField required label="Card number" fullWidth margin="normal" />
						<TextField required label="Expiry date" fullWidth margin="normal" />
						<TextField required label="CVC code" fullWidth margin="normal" />
						<Button type="submit" fullWidth variant="contained"  sx={{mt: '8px', fontWeight: 'bold',fontSize: 20,border: '2px solid',borderColor: 'primary.main',borderRadius: '8px',py: 1,px: 7,width: '100%',color: 'white',mb: '24px',ml:'24px',mr:'24px'}}>
							Place order
						</Button>
					</Box>
				</Grid>
				<Grid item xs={12} md={5}>
					<CheckoutOrderSummary />
				</Grid>
			</Grid>
		</Container>
	);
};

export default CheckoutForm;


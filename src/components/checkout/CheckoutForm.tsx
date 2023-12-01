import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button } from '@mui/material';
import CheckoutOrderSummary from './ckeckout-order-summary/CheckoutOrderSummary';

const CheckoutForm = () => {
	const handleSubmit = (event: any) => {
		event.preventDefault();
	};

	return (
		<Container maxWidth="lg" >
			<Typography variant="h4" gutterBottom sx={{mb:4}}>
				Checkout
			</Typography>
			<Grid container spacing={3} >
				<Grid item xs={12} md={7}>
					<Box component="form" onSubmit={handleSubmit} noValidate sx={{border: '1px solid #BDBFBD', borderRadius: '8px', boxShadow: 'none', p:2}}>
						<Typography variant="h6" >
							Contact information
						</Typography>
						<div style={{ display: 'flex', gap: '16px' }}>
  							<TextField required label="First name" fullWidth margin="normal" sx={{ ".MuiInputBase-root": { borderColor: 'neutral.70', borderRadius: '8px' } }} />
  							<TextField required label="Last name" fullWidth margin="normal" sx={{ ".MuiInputBase-root": { borderColor: 'neutral.70', borderRadius: '8px' } }} />
						</div>
						<TextField required label="Email address" fullWidth margin="normal" sx = {{ ".MuiInputBase-root": { borderColor: 'neutral.70', borderRadius:'8px'}}} />
						<Typography variant="h6" gutterBottom  sx={{ mt:2}}>
							Shipping address
						</Typography>
						<TextField required label="Street address" fullWidth margin="normal" sx = {{ ".MuiInputBase-root": { borderColor: 'neutral.70', borderRadius:'8px'}}} />
						<TextField required label="Country" fullWidth margin="normal" sx = {{ ".MuiInputBase-root": { borderColor: 'neutral.70', borderRadius:'8px'}}} />
						<TextField required label="Town / City" fullWidth margin="normal" sx = {{ ".MuiInputBase-root": { borderColor: 'neutral.70', borderRadius:'8px'}}} />
						<TextField label="State" fullWidth margin="normal"  sx = {{ ".MuiInputBase-root": { borderColor: 'neutral.70', borderRadius:'8px'}}}/>
						<TextField required label="Zip code" fullWidth margin="normal"sx = {{ ".MuiInputBase-root": { borderColor: 'neutral.70', borderRadius:'8px'}}} />

						<Typography variant="h6" gutterBottom sx={{ mt:2}}>
							Payment information
						</Typography>
						<TextField required label="Card number" fullWidth margin="normal" sx = {{ ".MuiInputBase-root": { borderColor: 'neutral.70', borderRadius:'8px'}}} />
						<div style={{ display: 'flex', gap: '16px' }}>
  							<TextField required label="Expiry date" fullWidth margin="normal" sx={{ ".MuiInputBase-root": { borderColor: 'neutral.70', borderRadius: '8px' } }}/>
							<TextField required label="CVC code" fullWidth margin="normal" sx={{ ".MuiInputBase-root": { borderColor: 'neutral.70', borderRadius: '8px' } }}/>
						</div>
						<Button type="submit" fullWidth variant="contained"  sx={{mt: '8px', fontWeight: 'bold',fontSize: 20,border: '2px solid',borderColor: 'primary.main',borderRadius: '8px',width: '100%',color: 'white',mb: '24px'}}>
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


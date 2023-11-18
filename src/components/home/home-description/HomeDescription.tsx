import React from 'react';
import { Box, Typography, Button, Stack, Paper, Container, Grid } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import ReplayIcon from '@mui/icons-material/Replay';

const HomeDescription = () => {
	return (
		<Container maxWidth="lg">
			<Box sx={{ my: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
				<Box>
					<Typography variant="h2" component="h1" gutterBottom>
						Your Source for Tech Brilliance
					</Typography>
					<Typography variant="h6" color="textSecondary" paragraph>
						For all things tech. Our mission is to bridge the gap between imagination and
						innovation, offering you a curated selection of cutting-edge electronics that empower
						and enrich your digital life.
					</Typography>
					<Stack direction="row" spacing={2}>
						<Button variant="contained" color="primary">
							Start Buying
						</Button>
						<Button variant="outlined" color="primary">
							Start Buying
						</Button>
					</Stack>
				</Box>
				<Box>
					<img
						src="https://s13emagst.akamaized.net/products/40685/40684413/images/res_16a3a662e1b74dd715c857686c585cd7.jpg"
						alt="Tech Items"
						style={{ maxWidth: '100%', height: 'auto' }}
					/>
				</Box>
			</Box>

			<Grid container spacing={4} sx={{ mt: 4 }}>
				<Grid item xs={12} sm={4}>
					<Paper variant="outlined" sx={{ p: 2, textAlign: 'center' }}>
						<LocalShippingIcon color="primary" sx={{ fontSize: 40 }} />
						<Typography variant="subtitle1" gutterBottom>
							Free Shipping
						</Typography>
						<Typography variant="body2">Free shipping over $300</Typography>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Paper variant="outlined" sx={{ p: 2, textAlign: 'center' }}>
						<SecurityIcon color="primary" sx={{ fontSize: 40 }} />
						<Typography variant="subtitle1" gutterBottom>
							Secure payment
						</Typography>
						<Typography variant="body2">Payments secured by Stripe</Typography>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Paper variant="outlined" sx={{ p: 2, textAlign: 'center' }}>
						<ReplayIcon color="primary" sx={{ fontSize: 40 }} />
						<Typography variant="subtitle1" gutterBottom>
							Return 30 days
						</Typography>
						<Typography variant="body2">Hassle-free returns</Typography>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};

export default HomeDescription;


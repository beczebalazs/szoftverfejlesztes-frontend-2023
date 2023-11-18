import React, { useState } from 'react';
import {
	Box,
	Typography,
	Card,
	CardContent,
	List,
	ListItem,
	ListItemText,
	ListItemAvatar,
	Avatar,
	IconButton,
	TextField,
	Button,
	Divider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CheckoutOrderSummary = () => {
	const [coupon, setCoupon] = useState('');
	const [discount, setDiscount] = useState(0);

	const handleApplyCoupon = () => {
		if (coupon === 'Nayz10') {
			setDiscount(8);
		}
	};

	const handleRemoveCoupon = () => {
		setCoupon('');
		setDiscount(0);
	};

	const orderItems = [
		{
			id: 1,
			name: 'Lorem Ipsum',
			price: 80.0,
			imageUrl:
				'https://s13emagst.akamaized.net/products/40685/40684413/images/res_16a3a662e1b74dd715c857686c585cd7.jpg',
		},
		{
			id: 2,
			name: 'Lorem Ipsum',
			price: 80.0,
			imageUrl:
				'https://s13emagst.akamaized.net/products/40685/40684413/images/res_16a3a662e1b74dd715c857686c585cd7.jpg',
		},
	];

	const subtotal = orderItems.reduce((total, item) => total + item.price, 0);
	const total = subtotal - discount;

	return (
		<Card>
			<CardContent>
				<Typography variant="h6" gutterBottom>
					Order summary
				</Typography>
				<List>
					{orderItems.map(item => (
						<ListItem
							key={item.id}
							secondaryAction={
								<IconButton edge="end" aria-label="delete">
									<DeleteIcon />
								</IconButton>
							}
						>
							<ListItemAvatar>
								<Avatar
									variant="square"
									src={item.imageUrl}
									alt={item.name}
									sx={{ width: 56, height: 56 }}
								/>
							</ListItemAvatar>
							<ListItemText primary={item.name} secondary={`$${item.price.toFixed(2)}`} />
						</ListItem>
					))}
				</List>
				<Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
					<TextField
						size="small"
						placeholder="Coupon code"
						value={coupon}
						onChange={e => setCoupon(e.target.value)}
						sx={{ mr: 1 }}
					/>
					<Button variant="contained" onClick={handleApplyCoupon}>
						Apply
					</Button>
				</Box>
				{discount > 0 && (
					<Box
						sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1 }}
					>
						<Typography variant="body2">Nayz10</Typography>
						<Box>
							<Typography variant="body2" color="error">
								-${discount.toFixed(2)}
							</Typography>
							<Button size="small" onClick={handleRemoveCoupon}>
								[Remove]
							</Button>
						</Box>
					</Box>
				)}
				<Divider sx={{ my: 2 }} />
				<Typography variant="body2">Shipping</Typography>
				<Typography variant="body2">Free</Typography>
				<Divider sx={{ my: 2 }} />
				<Typography variant="body1">Subtotal</Typography>
				<Typography variant="body1">${subtotal.toFixed(2)}</Typography>
				<Divider sx={{ my: 2 }} />
				<Typography variant="h6">Total</Typography>
				<Typography variant="h6">${total.toFixed(2)}</Typography>
			</CardContent>
		</Card>
	);
};

export default CheckoutOrderSummary;


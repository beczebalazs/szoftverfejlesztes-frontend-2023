import React, { FC, useEffect, useState } from 'react';
import {
	Box,
	Typography,
	Card,
	CardContent,
	List,
	ListItem,
	ListItemAvatar,
	Avatar,
	IconButton,
	TextField,
	Button,
	Divider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { selectCart } from '../../../store/my-cart/selector';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../../../store/my-cart/slice';
import useCouponesQuery from '../../../hooks/coupons/useCouponsquery';
import { useSnackbar } from 'notistack';

interface Props {
	setPrice: React.Dispatch<React.SetStateAction<number>>;
}

const CheckoutOrderSummary: FC<Props> = props => {
	const [coupon, setCoupon] = useState('');
	const [discount, setDiscount] = useState(0);

	const coupons = useCouponesQuery();

	const { enqueueSnackbar } = useSnackbar();

	const handleApplyCoupon = () => {
		const couponData = coupons.data?.find((couponItem: any) => couponItem.name === coupon);

		if (couponData) {
			setDiscount(couponData.value);
			enqueueSnackbar(`You saved ${couponData.value}$!`, {
				variant: 'success',
			});
		} else {
			enqueueSnackbar('This coupon does not exist!', {
				variant: 'error',
			});
		}
	};

	const handleRemoveCoupon = () => {
		setCoupon('');
		setDiscount(0);
	};

	const dispatch = useDispatch();

	const handleDeleteItem = (product: any) => {
		dispatch(deleteItem(product));
	};

	const cartItems = useSelector(selectCart);

	const subtotal = cartItems.reduce(
		(total, product) => total + product.data.price * product.quantity,
		0,
	);
	const total = subtotal - discount;

	useEffect(() => {
		props.setPrice(total);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [total]);

	return (
		<Card sx={{ border: '1px solid #BDBFBD', borderRadius: '8px', boxShadow: 'none' }}>
			<CardContent>
				<Typography variant="h6" gutterBottom>
					Order summary
				</Typography>
				<List>
					{cartItems.map(item => (
						<ListItem
							key={item.data._id}
							secondaryAction={
								<IconButton
									edge="end"
									aria-label="delete"
									onClick={() => handleDeleteItem(item.data._id)}
								>
									<DeleteIcon />
								</IconButton>
							}
						>
							<ListItemAvatar>
								<Avatar
									variant="square"
									src={item.data.image}
									alt={item.data.title}
									sx={{ width: 56, height: 56 }}
								/>
							</ListItemAvatar>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
									width: '100%',
								}}
							>
								<Typography variant="body1" sx={{ fontWeight: 'semibold' }}>
									{item.data.title}
								</Typography>
								<Typography variant="body1" sx={{ fontWeight: 'bold' }}>
									${item.data.price * item.quantity}
								</Typography>
							</Box>
						</ListItem>
					))}
				</List>
				<Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
					<TextField
						size="small"
						placeholder="Coupon code"
						value={coupon}
						onChange={e => setCoupon(e.target.value)}
						sx={{ mr: 1, '.MuiInputBase-root': { borderColor: 'neutral.70', borderRadius: '8px' } }}
					/>
					<Button
						variant="contained"
						onClick={handleApplyCoupon}
						sx={{
							fontWeight: 'bold',
							width: '50%',
							fontSize: 16,
							borderRadius: '8px',
							color: 'white',
						}}
					>
						Apply
					</Button>
				</Box>
				{discount > 0 && (
					<Box
						sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1 }}
					>
						<Typography variant="body2" color="error">
							-${discount.toFixed(2)}
						</Typography>
						<Button size="small" onClick={handleRemoveCoupon}>
							[Remove]
						</Button>
					</Box>
				)}
				<Divider sx={{ my: 2 }} />
				<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<Typography variant="body2">Shipping</Typography>
					<Typography variant="body2" sx={{ fontWeight: 'bold' }}>
						Free
					</Typography>
				</div>
				<Divider sx={{ my: 2 }} />
				<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<Typography variant="body1">Subtotal</Typography>
					<Typography variant="body1" sx={{ fontWeight: 'bold' }}>
						${subtotal.toFixed(2)}
					</Typography>
				</div>
				<Divider sx={{ my: 2 }} />
				<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<Typography variant="h6" sx={{ fontWeight: 'bold' }}>
						Total
					</Typography>
					<Typography variant="h6" sx={{ fontWeight: 'bold' }}>
						${total.toFixed(2)}
					</Typography>
				</div>
			</CardContent>
		</Card>
	);
};

export default CheckoutOrderSummary;


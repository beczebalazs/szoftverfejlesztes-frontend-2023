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
    <Container maxWidth={'lg'}>
      <Typography variant="h4" gutterBottom sx={{ mb: '48px' }}>
        My Cart
      </Typography>
      <Grid container spacing={12}>
        <Grid item xs={12} md={8}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 16px', borderBottom: '1px solid #E0E0E0' }}>
            <Typography variant="h6" sx={{fontWeight: 'bold'}}>Product</Typography>
            <Typography variant="h6" sx={{fontWeight: 'bold'}}>Quantity</Typography>
            <Typography variant="h6" sx={{fontWeight: 'bold'}}>Price</Typography>
          </div>
          {products.map(product => (
            <React.Fragment key={product.id}>
               <Card sx={{ display: 'flex', mb: 2, boxShadow: 'none', mt:4 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={product.image}
                  alt={product.name}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <Typography component="div" variant="h6" sx={{ fontSize: '20px', fontWeight: 'bold' }}>
                          {product.name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ fontSize: '16px' }}>
                          {product.description}
                        </Typography>
						            <IconButton sx={{fontSize:'14px', textAlign:'left'}}
                        onClick={() => {
                          /* Termék törlése */
                        }}
                      >
                        <DeleteIcon />
							          Remove
                      </IconButton>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <IconButton
                          onClick={() => handleQuantityChange(quantity - 1)}
                          disabled={quantity <= 1}
                        >
                          <RemoveIcon />
                        </IconButton>
                        <TextField
                          size="small"
                          value={quantity}
                          onChange={(e) => handleQuantityChange(Number(e.target.value))}
                        />
                        <IconButton onClick={() => handleQuantityChange(quantity + 1)}>
                          <AddIcon />
                        </IconButton>
                      </div>
					            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>${(product.price * quantity).toFixed(2)}</Typography>
                    </div>
                    </div>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                    
                  </CardActions>
                </Box>
              </Card>
              <Divider sx={{ my: 2 }} />
            </React.Fragment>
          ))}
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{width:400, boxShadow: 'none', border: '1px solid #BDBFBD', borderRadius: '8px'}}>
            <CardContent>
              <Typography variant="h6" sx={{mt:'24px', ml:'24px', fontWeight: 'bold'}}>Cart summary</Typography>
			        <RadioGroup value={shipping} onChange={handleShippingChange}>
                <FormControlLabel
                  value="free"
                  control={<Radio />}
                  label="Free shipping"
                  sx={{
                    ml: '24px',
                    mt: '24px',
                    border: shipping === 'free' ? 'solid' : 'none',
                    borderRadius: '8px',
                    borderColor: shipping === 'free' ? 'primary.main' : 'transparent',
                  }}
                />
                <FormControlLabel
                  value="express"
                  control={<Radio />}
                  label="Express shipping +$15.00"
                  sx={{
                    ml: '24px',
                    mr: '24px',
                    border: shipping === 'express' ? 'solid' : 'none',
                    borderRadius: '8px',
                    borderColor: shipping === 'express' ? 'primary.main' : 'transparent',
                  }}
                />
              </RadioGroup>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop:'24px' }}>
  				<Typography sx={{ fontSize: '16px', color:'neutral.40', ml:'24px' }}>Subtotal</Typography>
  				<Typography sx={{ fontSize: '16px', color:'neutral.40', mr:'24px', textAlig:'right',}}>${subtotal.toFixed(2)}</Typography>
				
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop:'12px' }}>
    			<Typography sx={{ fontSize: '20px', ml:'24px', fontWeight: 'bold'}}>Total</Typography>
    			<Typography sx={{ fontSize: '20px', mr:'24px', textAlign: 'right', fontWeight:'bold' }}>${total.toFixed(2)}</Typography>
  			</div>
            </CardContent>
            <CardActions>
              <Button fullWidth variant="contained" color="primary"onClick={() => navigate('/checkout')}
                sx={{mt: '8px', fontWeight: 'bold',fontSize: 20,border: '2px solid',borderColor: 'primary.main',borderRadius: '8px',py: 1,px: 7,width: '100%',color: 'white',mb: '24px',ml:'24px',mr:'24px'
                }}>
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

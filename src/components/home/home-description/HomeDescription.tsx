import React from 'react';
import { Box, Typography, Button, Stack, Paper, Grid } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import ReplayIcon from '@mui/icons-material/Replay';
import { useNavigate } from 'react-router-dom';

const HomeDescription = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ my: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ mb: 4, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        
        <Box>
          <Typography variant="h2" component="h1" gutterBottom sx={{ width: 628 }}>
            Your Source for Tech Brilliance
          </Typography>
          <Typography variant="h6" color="textSecondary" paragraph sx={{ width: 628 }}>
            For all things tech. Our mission is to bridge the gap between imagination and innovation,
            offering you a curated selection of cutting-edge electronics that empower and enrich your digital life.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                mt: 2,
                fontWeight: 'bold',
                fontSize: 20,
                border: '2px solid',
                borderColor: 'primary.main',
                borderRadius: '8px',
                py: 1,
                px: 4,
                color: 'neutral.10',
              }}
              onClick={() => navigate('/phones')}
            >
              Start Buying
            </Button>
          </Stack>
        </Box>
		<Box sx={{ mr: '24px', width:'628px' }}>
          <img
            src="https://s13emagst.akamaized.net/products/40685/40684413/images/res_16a3a662e1b74dd715c857686c585cd7.jpg"
            alt="Tech Items"
            style={{ maxWidth: '628px' }}
          />
        </Box>
      </Box>

      <Grid container spacing={4} sx={{ mt: 4, backgroundColor: 'neutral.20', border: 0, ml:'70px', mr:'70px' }}>
        <Grid item xs={12} sm={4}>
          <Paper variant="outlined" sx={{ textAlign: 'center', backgroundColor: 'neutral.20', border: 0, pb: 4 }}>
            <LocalShippingIcon color="primary" sx={{ fontSize: 40 }} />
            <Typography variant="subtitle1" gutterBottom>
              Free Shipping
            </Typography>
            <Typography variant="body2">Free shipping over $300</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper variant="outlined" sx={{ textAlign: 'center', backgroundColor: 'neutral.20', border: 0 }}>
            <SecurityIcon color="primary" sx={{ fontSize: 40 }} />
            <Typography variant="subtitle1" gutterBottom>
              Secure payment
            </Typography>
            <Typography variant="body2">Payments secured by Stripe</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper variant="outlined" sx={{ textAlign: 'center', backgroundColor: 'neutral.20', border: 0 }}>
            <ReplayIcon color="primary" sx={{ fontSize: 40 }} />
            <Typography variant="subtitle1" gutterBottom>
              Return 30 days
            </Typography>
            <Typography variant="body2">Hassle-free returns</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeDescription;

import { FC } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import {
	Autocomplete,
	Box,
	Button,
	IconButton,
	Stack,
	TextField,
	Theme,
	Toolbar,
	useMediaQuery,
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import AppbarBreadcrumbs, { BreadCrumbsProps } from './appbar-breadcrumbs/AppbarBreadcrumbs';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux/redux';
import { setSidebarIsOpen } from '../../../../store/navigation/slice';
import MuiAppBar from '@mui/material/AppBar';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';
import { userIdSelector } from '../../../../store/auth/selector';

interface Props {
	breadcrumbs?: BreadCrumbsProps[];
}

const AppBar: FC<Props> = props => {
	const dispatch = useAppDispatch();

	const isOpen = useAppSelector(state => state.navigation.sidebar.isOpen);
	const isLoggedIn = useAppSelector(userIdSelector);

	const isDownMd = useMediaQuery<Theme>(theme => theme.breakpoints.down('md'));

	const navigate = useNavigate();

	return (
		<MuiAppBar
			position="fixed"
			sx={{
				bgcolor: 'secondary.main',
				boxShadow: 'none',
				width: '100%',
				zIndex: 10000,
				//padding: '12px'
			}}
		>
			<Toolbar disableGutters={isDownMd}>
				<Stack
					direction="row"
					alignItems="center"
					justifyContent="space-between"
					sx={{ width: 1 / 1 }}
				>
					<Stack direction="row">
						{isOpen ? (
							<IconButton
								color="inherit"
								aria-label="open drawer"
								onClick={() => dispatch(setSidebarIsOpen(false))}
								edge="start"
							>
								<ArrowCircleLeftOutlinedIcon sx={{ color: 'neutral.10' }} />
							</IconButton>
						) : (
							<IconButton
								color="inherit"
								aria-label="open drawer"
								onClick={() => dispatch(setSidebarIsOpen(true))}
								edge="start"
							>
								<MenuIcon
									sx={{
										color: 'neutral.10',
									}}
								/>
							</IconButton>
						)}
						<Box onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
							<img src={'/images/logo.svg'} alt="Logo" />
						</Box>
					</Stack>
					<Autocomplete
						disablePortal
						id="combo-box-demo"
						options={[]}
						sx={{ width: 300 }}
						renderInput={params => (
							<TextField
								{...params}
								placeholder="Search"
								sx={{ bgcolor: 'neutral.10', borderRadius: '100px' }}
								InputProps={{
									...params.InputProps,
									startAdornment: <SearchIcon sx={{ color: 'gray', marginRight: 1 }} />,
								}}
							/>
						)}
					/>
					<Stack direction="row" alignItems="center">
						{isLoggedIn ? (
							<Button
								variant="text"
								sx={{
									color: 'neutral.10',
									display: 'flex',
									alignItems: 'center',
									mr: 2,
									gap: 0.5,
									px: 1,
								}}
								onClick={() => navigate('/user-details')}
							>
								<PermIdentityIcon />
								Account
							</Button>
						) : (
							<Button
								variant="text"
								sx={{
									color: 'neutral.10',
									display: 'flex',
									alignItems: 'center',
									mr: 2,
									gap: 0.5,
									px: 1,
								}}
								onClick={() => navigate('/login')}
							>
								<LoginIcon />
								Login
							</Button>
						)}
						<Button
							variant="text"
							sx={{
								color: 'neutral.10',
								display: 'flex',
								alignItems: 'center',
								mr: 2,
								gap: 0.5,
								px: 1,
							}}
							onClick={() => navigate('/favorites')}
						>
							<FavoriteBorderIcon />
							Favorites
						</Button>
						<Button
							variant="text"
							sx={{
								color: 'neutral.10',
								display: 'flex',
								alignItems: 'center',
								mr: 2,
								gap: 0.5,
								px: 1,
							}}
							onClick={() => navigate('/my-cart')}
						>
							<ShoppingCartOutlinedIcon />
							Cart
						</Button>
					</Stack>
				</Stack>
			</Toolbar>
			{props.breadcrumbs && <AppbarBreadcrumbs breadcrumbs={props.breadcrumbs} />}
		</MuiAppBar>
	);
};

export default AppBar;

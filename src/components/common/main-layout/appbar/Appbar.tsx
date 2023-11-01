import { FC } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import {
	Autocomplete,
	IconButton,
	Stack,
	TextField,
	Theme,
	Toolbar,
	Typography,
	useMediaQuery,
} from '@mui/material';

import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import AppbarBreadcrumbs, { BreadCrumbsProps } from './appbar-breadcrumbs/AppbarBreadcrumbs';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux/redux';
import { setSidebarIsOpen } from '../../../../store/navigation/slice';
import MuiAppBar from '@mui/material/AppBar';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

interface Props {
	breadcrumbs?: BreadCrumbsProps[];
}

const AppBar: FC<Props> = props => {
	const dispatch = useAppDispatch();

	const isOpen = useAppSelector(state => state.navigation.sidebar.isOpen);

	const isDownMd = useMediaQuery<Theme>(theme => theme.breakpoints.down('md'));

	return (
		<MuiAppBar
			position="fixed"
			sx={{
				bgcolor: 'secondary.main',
				boxShadow: 'none',
				width: '100%',
				zIndex: 10000,
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
								<ArrowCircleLeftOutlinedIcon sx={{ color: 'neutral.light' }} />
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
										color: 'neutral.light',
									}}
								/>
							</IconButton>
						)}
						<img src={'/images/logo.svg'} alt="Logo" />
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
								sx={{ bgcolor: 'neutral.light' }}
								InputProps={{
									...params.InputProps,
									startAdornment: <SearchIcon sx={{ color: 'gray', marginRight: 1 }} />,
								}}
							/>
						)}
					/>
					<Stack direction="row" alignItems="center">
						<Typography sx={{ color: 'neutral.light', display: 'flex', alignItems: 'center', mr: 2, gap: .5 }}>
							<PermIdentityIcon />
							Account
						</Typography>
						<Typography sx={{ color: 'neutral.light', display: 'flex', alignItems: 'center', mr: 2, gap: .5 }}>
							<FavoriteBorderIcon />
							Favorites
						</Typography>
						<Typography sx={{ color: 'neutral.light', display: 'flex', alignItems: 'center', mr: 2, gap: .5 }}>
							<ShoppingCartOutlinedIcon />
							Cart
						</Typography>
					</Stack>
				</Stack>
			</Toolbar>
			{props.breadcrumbs && <AppbarBreadcrumbs breadcrumbs={props.breadcrumbs} />}
		</MuiAppBar>
	);
};

export default AppBar;

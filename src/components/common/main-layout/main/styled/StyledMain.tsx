import { styled } from '@mui/material';

import { DrawerWidth } from '../../../../../constants/constants';

export const StyledMain = styled('main', {
	shouldForwardProp: prop =>
		prop !== 'open' && prop !== 'isUpXl' && prop !== 'isUpMd' && prop !== 'isTouchScreen',
})<{
	open?: boolean;
	isUpXl?: boolean;
	isUpMd?: boolean;
	isTouchScreen?: boolean;
}>(({ theme, open, isUpXl, isUpMd }) => ({
	minHeight: `calc(100vh - (${!isUpXl ? 60 : 70}px ))`,
	minWidth: 1280,
	marginTop: !isUpXl ? '60px' : '70px',
	marginBottom: !isUpMd ? '75px' : 0,
	flexGrow: 1,
	display: 'flex',
	flexDirection: 'column',
	transition: theme.transitions.create('margin', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	marginLeft: isUpXl ? `-${DrawerWidth}px` : 0,
	...(open &&
		isUpXl && {
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
}));

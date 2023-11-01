import { FC, useEffect } from 'react';

import { Drawer, useMediaQuery } from '@mui/material';
import { Theme } from '@mui/material/styles';

import SidebarList from './sidebar-list/SidebarList';
import { DrawerHeader } from './styled/DrawerHeader';
import { DrawerWidth } from '../../../../constants/constants';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux/redux';
import { setSidebarIsOpen } from '../../../../store/navigation/slice';

const Sidebar: FC = () => {
	const dispatch = useAppDispatch();

	const isOpen = useAppSelector(state => state.navigation.sidebar.isOpen);

	const isDownXl = useMediaQuery<Theme>(theme => theme.breakpoints.down('xl'));
	const isDownLg = useMediaQuery<Theme>(theme => theme.breakpoints.down('lg'));
	const isDownSm = useMediaQuery<Theme>(theme => theme.breakpoints.down('sm'));

	useEffect(() => {
		if (isDownLg) setTimeout(() => dispatch(setSidebarIsOpen(false)));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isDownLg]);

	return (
		<Drawer
			sx={{
				width: isDownSm ? '100vw' : `${DrawerWidth}px`,
				flexShrink: 0,
				zIndex: 10,

				'& .MuiDrawer-paper': {
					width: isDownSm ? '100vw' : `${DrawerWidth}px`,
					border: 0,
					boxSizing: 'border-box',
					backgroundColor: 'white',
					boxShadow: '5px 0 10px rgba(0, 0, 0, 0.2)',
				},
			}}
			variant={isDownXl ? 'temporary' : 'persistent'}
			anchor="left"
			open={isOpen}
			onClose={() => isDownXl && dispatch(setSidebarIsOpen(false))}
		>
			<DrawerHeader />
			<SidebarList />
		</Drawer>
	);
};

export default Sidebar;


import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { ListItemButton, ListItemIcon, ListItemText, Theme } from '@mui/material';
import List from '@mui/material/List';

import { sidebarItems } from './sidebar-items/sidebarItems';
import SidebarListItem from './sidebar-list-item/SidebarListItem';
import { useAppDispatch } from '../../../../../hooks/redux/redux';
import { setUserId } from '../../../../../store/auth/slice';

const SidebarList = () => {
	const dispatch = useAppDispatch();

	const handleLogOut = () => {
		dispatch(setUserId(undefined));
	};
	return (
		<List
			sx={{
				overflowY: 'scroll',
				'&::-webkit-scrollbar': {
					display: 'none',
				},
			}}
		>
			{sidebarItems.map((item: any) => (
				<SidebarListItem key={item.title} title={item.title} href={item.href} icon={item.icon} />
			))}
			<ListItemButton
				sx={{
					position: 'fixed',
					bottom: 30,
					width: '240px',
					'&:hover': {
						'& .MuiListItemIcon-root': {
							color: (theme: Theme) => theme.palette.primary.main,
						},
						'& .MuiListItemText-primary': {
							color: (theme: Theme) => theme.palette.primary.main,
						},
					},
				}}
				onClick={() => handleLogOut()}
			>
				<ListItemIcon>
					<LogoutOutlinedIcon sx={{ fontSize: 20, marginLeft: 2 }} />
				</ListItemIcon>
				<ListItemText primary={'Log out'} />
			</ListItemButton>
		</List>
	);
};

export default SidebarList;

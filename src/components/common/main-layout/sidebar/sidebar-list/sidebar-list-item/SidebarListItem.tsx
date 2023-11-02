import { ElementType, FC } from 'react';

import { ListItemButton, ListItemIcon, ListItemText, Theme } from '@mui/material';
import { useLocation } from 'react-router-dom';

type Props = {
	title: string;
	href?: string;
	icon: ElementType;
};

const SidebarListItem: FC<Props> = props => {

	const location = useLocation();

	const localePath = location.pathname.split('/')[2];

	const isActive = `/${localePath}` === props.href;

	return (
		<>
			<ListItemButton
				sx={
					isActive
						? {
								'& .MuiListItemIcon-root': {
									color: (theme: Theme) => theme.palette.primary.main,
								},
								'& .MuiListItemText-primary': {
									color: (theme: Theme) => theme.palette.primary.main,
								},
						  }
						: {
								'&:hover': {
									'& .MuiListItemIcon-root': {
										color: (theme: Theme) => theme.palette.primary.main,
									},
									'& .MuiListItemText-primary': {
										color: (theme: Theme) => theme.palette.primary.main,
									},
								},
						  }
				}
				href={props.href!}
			>
				<ListItemIcon>
					<props.icon sx={{ fontSize: 20, marginLeft: 2 }} />
				</ListItemIcon>
				<ListItemText primary={props.title} />
			</ListItemButton>
		</>
	);
};

export default SidebarListItem;

import { FC, ReactNode } from 'react';

import { Breadcrumbs, Link, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { nanoid } from '@reduxjs/toolkit';

export interface BreadCrumbsProps {
	href?: string;
	label?: string;
	icon?: ReactNode;
	onClick?: () => void;
}
interface Props {
	breadcrumbs?: BreadCrumbsProps[];
}
const AppbarBreadcrumbs: FC<Props> = props => {
	return (
		<Breadcrumbs aria-label="breadcrumb" sx={{ pl: 5, pt: 1 }}>
			{props.breadcrumbs?.map(breadcrumb => {
				if (breadcrumb.href || breadcrumb.onClick) {
					if (breadcrumb.icon) {
						return (
							<IconButton
								key={nanoid()}
								sx={{ color: 'grey.900', p: 0, mb: 0.5 }}
								onClick={breadcrumb?.onClick}
							>
								{breadcrumb.icon}
							</IconButton>
						);
					} else {
						return (
							<Link
								key={nanoid()}
								href={breadcrumb?.href}
								variant="body2"
								underline="hover"
								sx={{ color: 'grey.900' }}
								onClick={breadcrumb?.onClick}
							>
								{breadcrumb.label}
							</Link>
						);
					}
				} else {
					return (
						<Typography key={breadcrumb.label} variant="body2" sx={{ color: 'grey.600' }}>
							{breadcrumb.label}
						</Typography>
					);
				}
			})}
		</Breadcrumbs>
	);
};

export default AppbarBreadcrumbs;

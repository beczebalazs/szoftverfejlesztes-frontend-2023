import { PropsWithChildren, ReactNode } from 'react';

import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

import { BreadCrumbsProps } from '../components/common/main-layout/appbar/appbar-breadcrumbs/AppbarBreadcrumbs';

interface MainLayoutProps extends PropsWithChildren {
	sx?: SxProps<Theme> | undefined;
	breadcrumbs?: BreadCrumbsProps[];
	modals?: ReactNode[];
}

export type { MainLayoutProps };

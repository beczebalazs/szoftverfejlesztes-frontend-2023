import { FC, Fragment } from 'react';

import { Box } from '@mui/material';

import Appbar from './appbar/Appbar';
import Main from './main/Main';
import Sidebar from './sidebar/Sidebar';
import { MainLayoutProps } from '../../../types/MainLayoutProps';
import Footer from './footer/Footer';

const MainLayout: FC<MainLayoutProps> = props => {
	return (
		<Box display="flex" flexDirection={'column'} sx={{ ...props.sx }}>
			<Box display={'flex'}>
				<Appbar breadcrumbs={props.breadcrumbs} />
				<Sidebar />
				<Main>{props.children}</Main>
				{props.modals?.map((modal, index) => (
					<Fragment key={index}>{modal}</Fragment>
				))}
			</Box>
			<Footer />
		</Box>
	);
};

export default MainLayout;


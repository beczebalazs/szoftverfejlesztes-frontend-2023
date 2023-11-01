import { FC, ReactNode } from 'react';

import { Theme, useMediaQuery } from '@mui/material';

import { StyledMain } from './styled/StyledMain';
import { useAppSelector } from '../../../../hooks/redux/redux';

interface Props {
	children: ReactNode;
}

const Main: FC<Props> = props => {
	const isOpen = useAppSelector(state => state.navigation.sidebar.isOpen);
	const isUpXl = useMediaQuery<Theme>(theme => theme.breakpoints.up('xl'));
	const isUpMd = useMediaQuery<Theme>(theme => theme.breakpoints.up('md'));
	const isTouchScreen = useMediaQuery('(hover:none)');

	return (
		<StyledMain
			open={isOpen}
			isUpXl={isUpXl}
			isUpMd={isUpMd}
			isTouchScreen={isTouchScreen}
			sx={{ p: { xxs: 1.5, xs: 2, md: 3, lg: 5 }, flexGrow: 1 }}
		>
			{props.children}
		</StyledMain>
	);
};

export default Main;

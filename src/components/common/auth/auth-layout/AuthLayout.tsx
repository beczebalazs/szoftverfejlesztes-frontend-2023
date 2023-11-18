import { FC, ReactNode } from 'react';

import { Box } from '@mui/material';

interface Props {
	children: ReactNode;
}

const AuthLayout: FC<Props> = props => {
	return (
		<Box
			sx={{
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Box
				sx={{
					padding: 5,
					borderRadius: 2,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				{props.children}
			</Box>
		</Box>
	);
};

export default AuthLayout;


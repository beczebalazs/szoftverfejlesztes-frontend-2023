import { FC, ReactNode } from 'react';

import { Box } from '@mui/material';

interface Props {
	children: ReactNode;
}

const AuthLayout: FC<Props> = props => {
	return (
		<Box
			sx={{
				height: '562px',
				width: '416px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				border: '2px solid', 
				borderColor: 'neutral.70', 
				borderRadius: '8px',
				margin: '0 auto',
				mt: 12
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


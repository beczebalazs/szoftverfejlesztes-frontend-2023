import { FC, PropsWithChildren } from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { theme } from '../styles/theme';

const MuiThemeProvider: FC<PropsWithChildren> = props => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{props.children}
		</ThemeProvider>
	);
};

export default MuiThemeProvider;

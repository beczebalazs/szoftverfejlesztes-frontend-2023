import { FC, PropsWithChildren } from 'react';

import { SnackbarProvider } from 'notistack';

import MuiThemeProvider from './MuiThemeProvider';
import ReduxProvider from './ReduxProvider';
import TanstackQueryClientProvider from './TanstackQueryClientProvider';

const Providers: FC<PropsWithChildren> = props => {
	return (
		<ReduxProvider>
			<MuiThemeProvider>
				<TanstackQueryClientProvider>
					<SnackbarProvider maxSnack={5}>{props.children}</SnackbarProvider>
				</TanstackQueryClientProvider>
			</MuiThemeProvider>
		</ReduxProvider>
	);
};

export default Providers;


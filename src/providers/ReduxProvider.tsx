import { FC, PropsWithChildren } from 'react';

import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import PageLoading from '../components/common/page-loading/PageLoading';
import store from '../store';

const persistor = persistStore(store);

const ReduxProvider: FC<PropsWithChildren> = props => {
	return (
		<Provider store={store}>
			<PersistGate loading={<PageLoading />} persistor={persistor}>
				{props.children}
			</PersistGate>
		</Provider>
	);
};

export default ReduxProvider;

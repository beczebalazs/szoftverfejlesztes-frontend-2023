import { lazy, Suspense } from 'react';

import { createBrowserRouter } from 'react-router-dom';

import PageLoading from '../components/common/page-loading/PageLoading';

const HomePage = lazy(() => import('../pages/index'));

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Suspense fallback={<PageLoading />}>
				<HomePage />
			</Suspense>
		),
	},
]);

export { router };

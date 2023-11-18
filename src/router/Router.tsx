import { lazy, Suspense } from 'react';

import { createBrowserRouter } from 'react-router-dom';

import PageLoading from '../components/common/page-loading/PageLoading';
import PhonesPage from '../pages/phones';
import HeadphonesPage from '../pages/headphones';
import LaptopsPage from '../pages/laptops';
import SpeakersPage from '../pages/speakers';
import WatchesPage from '../pages/watches';
import ComputersPage from '../pages/computers';
import GamingPage from '../pages/gaming';
import LoginPage from '../pages/login';
import SignUpPage from '../pages/sign-up';
import UserDetails from '../pages/user-details';

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
	{
		path: '/phones',
		element: (
			<Suspense fallback={<PageLoading />}>
				<PhonesPage />
			</Suspense>
		),
	},
	{
		path: '/headphones',
		element: (
			<Suspense fallback={<PageLoading />}>
				<HeadphonesPage />
			</Suspense>
		),
	},
	{
		path: '/cameras',
		element: (
			<Suspense fallback={<PageLoading />}>
				<HomePage />
			</Suspense>
		),
	},
	{
		path: '/laptops',
		element: (
			<Suspense fallback={<PageLoading />}>
				<LaptopsPage />
			</Suspense>
		),
	},
	{
		path: '/tvs',
		element: (
			<Suspense fallback={<PageLoading />}>
				<HomePage />
			</Suspense>
		),
	},
	{
		path: '/speakers',
		element: (
			<Suspense fallback={<PageLoading />}>
				<SpeakersPage />
			</Suspense>
		),
	},
	{
		path: '/watches',
		element: (
			<Suspense fallback={<PageLoading />}>
				<WatchesPage />
			</Suspense>
		),
	},
	{
		path: '/computers',
		element: (
			<Suspense fallback={<PageLoading />}>
				<ComputersPage />
			</Suspense>
		),
	},
	{
		path: '/gaming',
		element: (
			<Suspense fallback={<PageLoading />}>
				<GamingPage />
			</Suspense>
		),
	},
	{
		path: '/login',
		element: (
			<Suspense fallback={<PageLoading />}>
				<LoginPage />
			</Suspense>
		),
	},
	{
		path: '/sign-up',
		element: (
			<Suspense fallback={<PageLoading />}>
				<SignUpPage />
			</Suspense>
		),
	},
	{
		path: '/user-details',
		element: (
			<Suspense fallback={<PageLoading />}>
				<UserDetails />
			</Suspense>
		),
	},
]);

export { router };


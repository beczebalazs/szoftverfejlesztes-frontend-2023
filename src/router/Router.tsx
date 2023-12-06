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
import CheckoutPage from '../pages/checkout';
import MyCartPage from '../pages/my-cart';
import ProductDetailPage from '../pages/product-detail';
import CamerasPage from '../pages/cameras';
import FavoritesPage from '../pages/favorites';
import TvsPage from '../pages/tvs';

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
				<CamerasPage />
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
				<TvsPage />
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
	{
		path: '/checkout',
		element: (
			<Suspense fallback={<PageLoading />}>
				<CheckoutPage />
			</Suspense>
		),
	},
	{
		path: '/my-cart',
		element: (
			<Suspense fallback={<PageLoading />}>
				<MyCartPage />
			</Suspense>
		),
	},
	{
		path: '/product/:id',
		element: (
			<Suspense fallback={<PageLoading />}>
				<ProductDetailPage />
			</Suspense>
		),
	},
	{
		path: '/favorites',
		element: (
			<Suspense fallback={<PageLoading />}>
				<FavoritesPage />
			</Suspense>
		),
	},
]);

export { router };


import React from 'react';
import Providers from './providers/Providers';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/Router';

function App() {
  return (
    <Providers>
			<RouterProvider router={router} />
		</Providers>
  );
}

export default App;

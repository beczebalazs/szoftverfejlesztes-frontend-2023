import { PaletteOptions } from '@mui/material';

declare module '@mui/material/styles' {
	interface PaletteOptions {
		neutral: {
			light: string;
			main: string;
			dark: string;
		};
	}
}
export const palette: PaletteOptions = {
	mode: 'light',
	primary: {
		main: '#2EC4B6',
		// light: 
		// dark: 
		// contrastText: 
	},
	secondary: {
		main: '#011627',
		// light: 
		// dark: 
		// contrastText:
	},
	neutral: {
		light: '#FDFFFC',
		main: '',
		dark: ''
	}
};

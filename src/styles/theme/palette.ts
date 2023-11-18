import { PaletteOptions } from '@mui/material';

declare module '@mui/material/styles' {
	interface PaletteOptions {
		neutral: {
			10: string;
			20: string;
			30: string;
			40: string;
			50: string;
			60: string;
			70: string;
		};

	}
}

export const palette: PaletteOptions = {
	primary: {
		main: '#2EC4B6',
		dark: '#065E56',
		light: '#A0FFF6'
	},	
	secondary: {
		main: '#011627',
		light: '#1B476B'
		
	},
	neutral: {
		10: '#FDFFFC',
		20: '#F5F6F8',
		30: '#DDDFDD',
		40: '#BDBFBD',
		50: '#9D9F9E', 
		60: '#7E807F',
		70: '#454545'
	}
};

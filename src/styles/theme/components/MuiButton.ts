import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

declare module '@mui/material/Button' {
	interface ButtonPropsVariantOverrides {
		link: true;
	}
	interface ButtonPropsColorOverrides {
		neutral: true;
	}
}

interface MuiButtonProps {
	defaultProps?: ComponentsProps['MuiButton'];
	styleOverrides?: ComponentsOverrides<Theme>['MuiButton'];
	variants?: ComponentsVariants['MuiButton'];
}

const MuiButton: MuiButtonProps = {
	styleOverrides: {
		root: ({ theme }) => ({
			borderRadius: theme.shape.borderRadius / 1.5,
			paddingLeft: theme.spacing(5),
			paddingRight: theme.spacing(5),
			boxShadow: 'none',
			'&:hover': {
				boxShadow: 'none',
			},
			textTransform: 'none',
		}),
	},
	variants: [
		{
			props: { variant: 'link', color: 'primary', disableRipple: true },
			style: ({ theme }) => ({
				paddingTop: 0,
				paddingBottom: 0,
				paddingLeft: theme.spacing(0.25),
				paddingRight: theme.spacing(0.25),
				color: theme.palette.primary.main,
				'&:hover': {
					textDecoration: 'underline',
					backgroundColor: 'transparent',
				},
			}),
		},
		{
			props: { variant: 'link', color: 'error', disableRipple: true },
			style: ({ theme }) => ({
				paddingTop: 0,
				paddingBottom: 0,
				paddingLeft: theme.spacing(0.25),
				paddingRight: theme.spacing(0.25),
				color: theme.palette.error.main,
				'&:hover': {
					textDecoration: 'underline',
					backgroundColor: 'transparent',
				},
			}),
		},
		{
			props: { color: 'neutral', variant: 'text' },
			style: {
				color: '#000',
			},
		},
	],
};

export default MuiButton;

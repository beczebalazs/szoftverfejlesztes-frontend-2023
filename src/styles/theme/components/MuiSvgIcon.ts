import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

interface MuiSvgIconProps {
	defaultProps?: ComponentsProps['MuiSvgIcon'];
	styleOverrides?: ComponentsOverrides<Theme>['MuiSvgIcon'];
	variants?: ComponentsVariants['MuiSvgIcon'];
}

const MuiSvgIcon: MuiSvgIconProps = {
	defaultProps: {
		fontSize: 'small',
	},
	// variants: [{ props: { fontSize: 'small' }, style: {} }],
};

export default MuiSvgIcon;

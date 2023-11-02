import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

interface MuiTextFieldProps {
	defaultProps?: ComponentsProps['MuiTextField'];
	styleOverrides?: ComponentsOverrides<Theme>['MuiTextField'];
	variants?: ComponentsVariants['MuiTextField'];
}

const MuiTextField: MuiTextFieldProps = {
	defaultProps: {
		size: 'small',
	},
};

export default MuiTextField;

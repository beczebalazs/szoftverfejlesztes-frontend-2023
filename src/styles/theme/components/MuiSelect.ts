import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

interface MuiSelectProps {
	defaultProps?: ComponentsProps['MuiSelect'];
	styleOverrides?: ComponentsOverrides<Theme>['MuiSelect'];
	variants?: ComponentsVariants['MuiSelect'];
}

const MuiSelect: MuiSelectProps = {
	defaultProps: {
		size: 'small',
	},
};

export default MuiSelect;

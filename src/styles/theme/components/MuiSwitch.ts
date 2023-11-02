import { Theme } from '@emotion/react';
import { ComponentsOverrides, ComponentsProps, ComponentsVariants } from '@mui/material';

interface MuiSwitchProps {
	defaultProps?: ComponentsProps['MuiSwitch'];
	styleOverrides?: ComponentsOverrides<Theme>['MuiSwitch'];
	variants?: ComponentsVariants['MuiSwitch'];
}
const MuiSwitch: MuiSwitchProps = {
	styleOverrides: {
		switchBase: {
			'&.Mui-checked + .MuiSwitch-track': {
				backgroundColor: '#42A5F5',
				opacity: 1,
			},
		},
	},
};

export default MuiSwitch;

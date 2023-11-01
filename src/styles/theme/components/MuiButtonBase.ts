import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

import LinkBehavior from './LinkBehavior';

interface MuiButtonBaseProps {
	defaultProps?: ComponentsProps['MuiButtonBase'];
	styleOverrides?: ComponentsOverrides<Theme>['MuiButtonBase'];
	variants?: ComponentsVariants['MuiButtonBase'];
}

const MuiButtonBase: MuiButtonBaseProps = {
	defaultProps: {
		LinkComponent: LinkBehavior,
	},
};

export default MuiButtonBase;


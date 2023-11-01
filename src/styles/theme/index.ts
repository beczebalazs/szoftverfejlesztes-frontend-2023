import { createTheme } from '@mui/material';

import { breakpoints } from './breakpoints';
import MuiButton from './components/MuiButton';
import MuiButtonBase from './components/MuiButtonBase';
import MuiLink from './components/MuiLink';
import MuiSelect from './components/MuiSelect';
import MuiSvgIcon from './components/MuiSvgIcon';
import MuiSwitch from './components/MuiSwitch';
import MuiTextField from './components/MuiTextField';
import { palette } from './palette';

export const theme = createTheme({
	palette,
	breakpoints,
	shape: {
		borderRadius: 0,
	},
	components: {
		MuiButton,
		MuiLink,
		MuiButtonBase,
		MuiSwitch,
		MuiTextField,
		MuiSelect,
		MuiSvgIcon,
	},
});

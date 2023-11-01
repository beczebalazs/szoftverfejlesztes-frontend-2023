import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';

export const UserTooltip = styled(({ className, ...props }: TooltipProps) => (
	<Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: 'white',
		color: '#757575',
		width: '233px',
		boxShadow: theme.shadows[2],
		borderRadius: '16px',
		'&.MuiTooltip-tooltip': {
			'&.MuiTooltip-tooltipPlacementBottom': {
				marginTop: '-50px',
			},
		},
	},
}));

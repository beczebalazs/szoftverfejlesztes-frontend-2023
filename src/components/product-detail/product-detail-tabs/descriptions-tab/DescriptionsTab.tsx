import { Stack, Typography } from '@mui/material';
import React, { FC } from 'react';

interface Props {
	longDescription: string;
}

const DescriptionsTab: FC<Props> = props => {
	return (
		<Stack>
			<Typography variant="body1">{props.longDescription}</Typography>
		</Stack>
	);
};

export default DescriptionsTab;


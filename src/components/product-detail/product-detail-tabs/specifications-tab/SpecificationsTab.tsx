import { Fragment } from 'react';

import { Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import { nanoid } from '@reduxjs/toolkit';

import { ProductAttributeGroup } from '../../../../types/ProductAttributeGroup';
import specifications from '../../../../mocks/specifications.json';

const SpecificationsTab = () => {
	let attributeGroups: ProductAttributeGroup[] = specifications;

	attributeGroups = attributeGroups.map(item => ({
		...item,
		options: item.options.filter(item => item.value !== ''),
	}));

	attributeGroups = attributeGroups.filter(item => item.options.length !== 0);

	return (
		<TableContainer sx={{ mt: 5, ml: 3, maxWidth: 700, px: 3, py: 2 }}>
			<Table size="small">
				<TableBody>
					{attributeGroups.map((attributeGroup: ProductAttributeGroup) => (
						<Fragment key={nanoid()}>
							<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell component="th" scope="row" sx={{ border: 0 }}></TableCell>
							</TableRow>
							<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell component="th" scope="row" sx={{ pl: 0 }}>
									<Typography variant="body1" color="initial" sx={{ fontWeight: 'bold' }}>
										{attributeGroup.name}
									</Typography>
								</TableCell>
							</TableRow>
							{attributeGroup.options.map((o, i) => (
								<TableRow
									key={o.key}
									sx={{
										bgcolor: i % 2 === 0 ? 'grey.300' : undefined,
										'&:last-child td, &:last-child th': { border: 0 },
									}}
								>
									<TableCell component="th" scope="row">
										{o.key}
									</TableCell>
									<TableCell align="right">{o.value}</TableCell>
								</TableRow>
							))}
						</Fragment>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default SpecificationsTab;


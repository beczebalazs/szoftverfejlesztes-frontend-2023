import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DescriptionsTab from './descriptions-tab/DescriptionsTab';
import SpecificationsTab from './specifications-tab/SpecificationsTab';
import ReviewsTab from './reviews-tab/ReviewsTab';

interface Props {
	longDescription: string;
}

const ProductDetailTabs: React.FC<Props> = props => {
	const [value, setValue] = React.useState('1');

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%', typography: 'body1' }}>
			<TabContext value={value}>
				<Box
					sx={{
						borderBottom: 1,
						borderColor: 'divider',
						backgroundColor: 'secondary.main',
						borderRadius: '8px',
					}}
				>
					<TabList onChange={handleChange}>
						<Tab label="Description" value="1" sx={{ color: 'white', marginRight: 4 }} />
						<Tab label="Additional Information" value="2" sx={{ color: 'white', marginRight: 4 }} />
						<Tab label="Reviews" value="3" sx={{ color: 'white', marginRight: 4 }} />
					</TabList>
				</Box>
				<TabPanel value="1">
					<DescriptionsTab longDescription={props.longDescription} />
				</TabPanel>
				<TabPanel value="2">
					<SpecificationsTab />
				</TabPanel>
				<TabPanel value="3">
					<ReviewsTab />
				</TabPanel>
			</TabContext>
		</Box>
	);
};

export default ProductDetailTabs;


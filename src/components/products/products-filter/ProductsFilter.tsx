import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import Checkbox from '@mui/material/Checkbox/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';
import FormGroup from '@mui/material/FormGroup/FormGroup';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

interface Props {
	title: string;
	options: Array<String>;
}

const ProductsFilter: FC<Props> = props => {
	const { title, options } = props;

	return (
		<Paper elevation={8} sx={{ px: 2, py: 2 }}>
			<Typography
				sx={{
					fontWeight: 600,
					fontSize: '1.25rem',
				}}
			>
				{title}
			</Typography>
			<FormGroup sx={{ display: 'flex', pt: 2 }}>
				{options.map(item => (
					<FormControlLabel
						key={uuid()}
						control={<Checkbox name={title} value={item} />}
						label={item}
					/>
				))}
			</FormGroup>
		</Paper>
	);
};

export default ProductsFilter;


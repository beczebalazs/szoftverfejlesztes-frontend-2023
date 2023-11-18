import React, { FC } from 'react';
import { Paper, Typography, CardActionArea, CardMedia, CardContent } from '@mui/material';

interface Props {
	title: string;
	image: string;
	href: string;
}

const CategoriesCard: FC<Props> = props => {
	return (
		<CardActionArea component="a" href={props.href}>
			<Paper>
				<CardMedia
					component="img"
					image={props.image}
					alt={'image'}
					sx={{ height: 140, objectFit: 'contain', marginBottom: 1 }}
				/>
				<CardContent>
					<Typography gutterBottom variant="subtitle1" component="div" align="center">
						{props.title}
					</Typography>
				</CardContent>
			</Paper>
		</CardActionArea>
	);
};

export default CategoriesCard;

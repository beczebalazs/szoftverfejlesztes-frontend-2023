import React, { FC } from 'react';
import { Card, CardContent, Typography, Avatar, Rating, Stack } from '@mui/material';
import { Review } from '../../../../../types/Review';

const ReviewCard: FC<{ review: Review }> = ({ review }) => (
	<Card raised sx={{ margin: '1rem', width: 1 / 1, boxShadow: 'none' }}>
		<CardContent>
			<Stack direction="row" spacing={2} alignItems="center">
				<Avatar>{review.username.charAt(0)}</Avatar>
				<Typography variant="subtitle2">{review.username}</Typography>
				{review.date && (
					<Typography variant="body2" color="text.secondary">
						{review.date}
					</Typography>
				)}
			</Stack>
			<Rating value={review.rating} readOnly />
			<Typography variant="body2">{review.description}</Typography>
		</CardContent>
	</Card>
);

export default ReviewCard;


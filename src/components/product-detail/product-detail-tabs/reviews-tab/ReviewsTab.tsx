import { FC, useState } from 'react';
import { Button, Divider, Stack, Typography } from '@mui/material';

import mockReviews from '../../../../mocks/reviews.json';
import ReviewCard from './review-card/ReviewCard';
import AddReview from './add-review/AddReview';

const ReviewsTab: FC = () => {
	const [addingReview, setAddingReview] = useState(false);

	return (
		<>
			<Stack direction={'row'} justifyContent="space-between">
				<Stack>
					<Typography variant="h5" component="h2">
						Customer reviews
					</Typography>
					<Typography component="legend">{`4.5 (120 reviews)`}</Typography>
				</Stack>

				<Button
					variant="outlined"
					sx={{ color: 'primary.main' }}
					onClick={() => setAddingReview(true)}
				>
					Write review
				</Button>
			</Stack>
			<Divider />
			{addingReview && (
				<>
					<AddReview setAddingReview={setAddingReview} />
					<Divider />
				</>
			)}

			{mockReviews.map(review => (
				<>
					<ReviewCard key={review.id} review={review} />
					<Divider />
				</>
			))}
		</>
	);
};

export default ReviewsTab;


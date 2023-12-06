import { FC, useState } from 'react';
import { Button, Divider, Stack, Typography } from '@mui/material';

import ReviewCard from './review-card/ReviewCard';
import AddReview from './add-review/AddReview';
import { useNavigate, useParams } from 'react-router-dom';
import useReviewsQuery from '../../../../hooks/reviews/useReviewsQuery';
import PageLoading from '../../../common/page-loading/PageLoading';
import { Review } from '../../../../types/Review';
import { userIdSelector } from '../../../../store/auth/selector';
import { useSelector } from 'react-redux';

const calculateAverageRating = (reviews: any) => {
	if (reviews.length === 0) return 0;

	const totalRating = reviews.reduce((sum: any, review: any) => {
		const rating = typeof review.rating === 'number' ? review.rating : parseFloat(review.rating);
		return sum + rating;
	}, 0);

	return (totalRating / reviews?.length).toFixed(1);
};

const ReviewsTab: FC = () => {
	const [addingReview, setAddingReview] = useState(false);
	const { id } = useParams();
	const reviewsQuery = useReviewsQuery(id!);

	const isLoggedIn = useSelector(userIdSelector);

	const navigate = useNavigate();

	if (reviewsQuery.isLoading) return <PageLoading />;

	const averageRating = calculateAverageRating(reviewsQuery.data);
	const totalReviews = reviewsQuery.data?.length;
	return (
		<>
			<Stack direction={'row'} justifyContent="space-between">
				<Stack>
					<Typography variant="h5" component="h2">
						Customer reviews
					</Typography>
					<Typography component="legend">{`${averageRating} (${totalReviews} reviews)`}</Typography>
				</Stack>

				{isLoggedIn !== undefined ? (
					<Button
						variant="outlined"
						sx={{
							fontWeight: 'bold',
							fontSize: 16,
							border: '2px solid',
							borderColor: 'primary.main',
							borderRadius: '8px',
							height: '46px',
							mb: 4,
						}}
						onClick={() => setAddingReview(true)}
					>
						Write review
					</Button>
				) : (
					<Button
						variant="outlined"
						sx={{
							fontWeight: 'bold',
							fontSize: 16,
							border: '2px solid',
							borderColor: 'primary.main',
							borderRadius: '8px',
							height: '46px',
							mb: 4,
						}}
						onClick={() => navigate('/login')}
					>
						Please login
					</Button>
				)}
			</Stack>
			<Divider />
			{addingReview && (
				<>
					<AddReview setAddingReview={setAddingReview} />
					<Divider />
				</>
			)}

			{reviewsQuery.data?.map((review: Review) => (
				<>
					<ReviewCard key={review._id} review={review} />
					<Divider />
				</>
			))}
		</>
	);
};

export default ReviewsTab;


import { Dispatch, FC, SetStateAction, useState } from 'react';
import {
	Button,
	Card,
	CardContent,
	Stack,
	TextField,
	Typography,
	Avatar,
	Rating,
} from '@mui/material';
import usePostReviewMutation from '../../../../../hooks/reviews/usePostReviewMutation';
import { useParams } from 'react-router-dom';
import useGetCurrentUserQuery from '../../../../../hooks/user/useGetCurrentUserQuery';

interface Props {
	setAddingReview: Dispatch<SetStateAction<boolean>>;
}

const AddReview: FC<Props> = props => {
	const [rating, setRating] = useState<number | null>(null);
	const [comment, setComment] = useState<string>('');
	const { id } = useParams();
	const postReviewtMutation = usePostReviewMutation();

	const user = useGetCurrentUserQuery();

	const date = new Date().toLocaleDateString();

	const handleSubmit = () => {
		postReviewtMutation.mutate({
			payload: {
				productId: id,
				username: user?.data?.username,
				description: comment,
				rating: rating,
				date: date,
			} as any,
		});
		props.setAddingReview(false);
	};

	return (
		<Card raised sx={{ margin: '1rem', width: 1, boxShadow: 'none' }}>
			<CardContent>
				<Stack direction="row" spacing={2} alignItems="center">
					<Avatar>{user?.data?.username.charAt(0)}</Avatar>
					<Typography variant="subtitle2">{user?.data?.username}</Typography>
					<Typography variant="body2" color="text.secondary">
						{date}
					</Typography>
				</Stack>
				<Rating
					name="simple-controlled"
					value={rating}
					onChange={(_, newValue) => {
						setRating(newValue);
					}}
				/>
				<TextField
					fullWidth
					multiline
					rows={4}
					placeholder="Write your review here"
					margin="normal"
					value={comment}
					onChange={e => setComment(e.target.value)}
				/>
				<Button
					variant="outlined"
					sx={{
						mt: '8px',
						fontWeight: 'bold',
						fontSize: 16,
						border: '2px solid',
						borderColor: 'primary.main',
						borderRadius: '8px',
						mr: '8px',
					}}
					onClick={() => props.setAddingReview(false)}
				>
					Cancel
				</Button>
				<Button
					variant="contained"
					sx={{
						mt: '8px',
						fontWeight: 'bold',
						fontSize: 16,
						border: '2px solid',
						borderColor: 'primary.main',
						borderRadius: '8px',
						color: 'white',
					}}
					onClick={handleSubmit}
				>
					Submit
				</Button>
			</CardContent>
		</Card>
	);
};

export default AddReview;


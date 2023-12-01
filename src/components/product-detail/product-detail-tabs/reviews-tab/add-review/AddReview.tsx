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

// Mock user data
const currentUser = {
	name: 'Current User',
	date: new Date().toLocaleDateString(),
};

interface Props {
	setAddingReview: Dispatch<SetStateAction<boolean>>;
}

const AddReview: FC<Props> = props => {
	const [rating, setRating] = useState<number | null>(null);
	const [comment, setComment] = useState<string>('');

	return (
		<Card raised sx={{ margin: '1rem', width: 1, boxShadow: 'none' }}>
			<CardContent>
				<Stack direction="row" spacing={2} alignItems="center">
					<Avatar>{currentUser.name.charAt(0)}</Avatar>
					<Typography variant="subtitle2">{currentUser.name}</Typography>
					<Typography variant="body2" color="text.secondary">
						{currentUser.date}
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
					sx={{ mt: '8px', fontWeight: 'bold',  fontSize: 16, border: '2px solid', borderColor: 'primary.main', borderRadius: '8px', mr:'8px' }}
					onClick={() => props.setAddingReview(false)}
						
				>
					Cancel
				</Button>
				<Button variant="contained" sx={{ mt: '8px', fontWeight: 'bold',  fontSize: 16, border: '2px solid', borderColor: 'primary.main', borderRadius: '8px',color:'white'  }}>
					Submit
				</Button>
			</CardContent>
		</Card>
	);
};

export default AddReview;


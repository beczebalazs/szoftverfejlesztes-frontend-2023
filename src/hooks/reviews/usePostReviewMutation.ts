import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSnackbar } from 'notistack';

import { postReview } from '../../services/reviews';

const usePostReviewMutation = () => {
	const queryClient = useQueryClient();

	const { enqueueSnackbar } = useSnackbar();

	return useMutation({
		mutationKey: ['reviews'],
		onError: () => {
			enqueueSnackbar('Error! The review doesnt add!', {
				variant: 'error',
			});
		},
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ['/reviews'] });
			await queryClient.invalidateQueries({ queryKey: ['/products'] });
			enqueueSnackbar('Success! You added a review.', {
				variant: 'success',
			});
		},
		mutationFn: (vars: { payload: any }) => postReview(vars.payload),
	});
};

export default usePostReviewMutation;


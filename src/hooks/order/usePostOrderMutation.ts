import { useMutation } from '@tanstack/react-query';
import { useSnackbar } from 'notistack';

import { useNavigate } from 'react-router-dom';
import { postOrder } from '../../services/order';

const usePostOrderMutation = () => {
	const { enqueueSnackbar } = useSnackbar();

	const navigate = useNavigate();

	return useMutation({
		mutationKey: ['order'],
		onError: () => {
			enqueueSnackbar('Error on the submit order!', {
				variant: 'error',
			});
		},
		onSuccess: async () => {
			navigate('/');
			enqueueSnackbar('Success! You ordered the items.', {
				variant: 'success',
			});
		},
		mutationFn: (vars: { payload: any }) => postOrder(vars.payload),
	});
};

export default usePostOrderMutation;


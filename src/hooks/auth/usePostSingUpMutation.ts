import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { postSignUp } from '../../services/sign-up';
import { SignUpPayload } from '../../types/Auth';
import { useSnackbar } from 'notistack';

const usePostSignUpMutation = () => {

	const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

	return useMutation({
		mutationKey: ['login'],
		mutationFn: (vars: { payload: SignUpPayload }) => postSignUp(vars.payload),
		onError: () => enqueueSnackbar('Sign up error! Internal server error.', {
            variant: 'error',
        }),
		onSuccess: () => {
			navigate('/login');
		},
	});
};

export default usePostSignUpMutation;


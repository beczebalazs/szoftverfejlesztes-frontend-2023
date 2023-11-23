import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { postSignUp } from '../../services/sign-up';
import { SignUpPayload } from '../../types/Auth';

const usePostSignUpMutation = () => {

	const navigate = useNavigate();

	return useMutation({
		mutationKey: ['login'],
		mutationFn: (vars: { payload: SignUpPayload }) => postSignUp(vars.payload),
		onError: () => console.log('error'),
		onSuccess: () => {
			navigate('/login');
		},
	});
};

export default usePostSignUpMutation;


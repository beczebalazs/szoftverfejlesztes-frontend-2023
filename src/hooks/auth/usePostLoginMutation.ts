import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../redux/redux';
import { postLogin } from '../../services/login';
import { setAuthToken } from '../../store/auth/slice';
import { LoginPayload } from '../../types/Auth';

const usePostLoginMutation = () => {

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    return useMutation({
        mutationKey: ['login'],
        onError: () => console.log('error'),
        onSuccess: data => {
            dispatch(setAuthToken(data.access_token));
            navigate('/');
        },
        mutationFn: (vars: { payload: LoginPayload }) => postLogin(vars.payload),
    });
};

export default usePostLoginMutation;
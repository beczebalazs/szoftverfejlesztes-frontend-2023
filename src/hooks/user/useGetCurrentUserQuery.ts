import { useQuery } from '@tanstack/react-query';

import { getCurrentUser } from '../../services/user';
import { useAppSelector } from '../redux/redux';
import { userIdSelector } from '../../store/auth/selector';

const useGetCurrentUserQuery = () => {
	const userId = useAppSelector(userIdSelector);

	return useQuery({
		queryKey: ['currentUser'],
		queryFn: () => getCurrentUser(userId),
	});
};

export default useGetCurrentUserQuery;


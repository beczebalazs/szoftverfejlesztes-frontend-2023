import { useQuery } from '@tanstack/react-query';

import { getCurrentUser } from '../../services/user';

const useGetCurrentUserQuery = () => {
	return useQuery({
		queryKey: ['currentUser'],
		queryFn: getCurrentUser,
	});
};

export default useGetCurrentUserQuery;


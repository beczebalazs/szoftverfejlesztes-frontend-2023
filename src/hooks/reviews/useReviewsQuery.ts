import { useQuery } from '@tanstack/react-query';

import { getReviews } from '../../services/reviews';

const useReviewsQuery = (id: string) => {
	return useQuery({
		queryKey: ['/reviews', id],
		queryFn: () => getReviews(id),
	});
};

export default useReviewsQuery;


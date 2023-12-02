import { useQuery } from '@tanstack/react-query';

import { getCoupones } from '../../services/coupons';

const useCouponesQuery = () => {
	return useQuery({
		queryKey: ['coupones'],
		queryFn: () => getCoupones(),
	});
};

export default useCouponesQuery;


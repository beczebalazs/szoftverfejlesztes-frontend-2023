import { useQuery } from '@tanstack/react-query';

import { getPhones } from '../../services/phones';

const usePhonesQuery = () => {
	return useQuery({
		queryKey: ['phones'],
		queryFn: getPhones,
	});
};

export default usePhonesQuery;


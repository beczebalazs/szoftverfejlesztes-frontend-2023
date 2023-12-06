import { useQuery } from '@tanstack/react-query';

import { getProductsForSearch } from '../../services/products';

const useProductsForSearchQuery = () => {
	return useQuery({
		queryKey: ['products'],
		queryFn: () => getProductsForSearch(),
	});
};

export default useProductsForSearchQuery;


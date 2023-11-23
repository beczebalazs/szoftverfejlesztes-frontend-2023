import { useQuery } from '@tanstack/react-query';

import { getProducts } from '../../services/products';

const useProductsQuery = (category: string) => {
	return useQuery({
		queryKey: ['phones'],
		queryFn: () => getProducts(category),
	});
};

export default useProductsQuery;


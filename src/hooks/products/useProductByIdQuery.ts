import { useQuery } from '@tanstack/react-query';

import { getProduct } from '../../services/products';

const useProductByIdQuery = (id: string) => {
	return useQuery({
		queryKey: ['/products', id],
		queryFn: () => getProduct(id),
	});
};

export default useProductByIdQuery;


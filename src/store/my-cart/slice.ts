// features/cart/cartSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '../../types/CartItem';
import { Products } from '../../types/Products';

interface CartState {
	items: CartItem[];
}

const initialState: CartState = {
	items: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<Products>) => {
			const product = action.payload;
			const existingItem = state.items.find(item => item.data.id === product.id);

			if (existingItem) {
				existingItem.quantity += 1;
			} else {
				state.items.push({ data: product, quantity: 1 });
			}
		},
		removeItem: (state, action: PayloadAction<string>) => {
			const id = action.payload;
			const existingItemIndex = state.items.findIndex(item => item.data.id === id);

			if (existingItemIndex !== -1) {
				if (state.items[existingItemIndex].quantity > 1) {
					state.items[existingItemIndex].quantity -= 1;
				} else {
					state.items.splice(existingItemIndex, 1);
				}
			}
		},
		deleteItem: (state, action: PayloadAction<string>) => {
			const id = action.payload;
			const existingItemIndex = state.items.findIndex(item => item.data.id === id);

			if (existingItemIndex !== -1) {
				state.items.splice(existingItemIndex, 1);
			}
		},
	},
});

export const { addItem, removeItem, deleteItem } = cartSlice.actions;

export default cartSlice;


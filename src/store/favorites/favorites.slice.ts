import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Products } from '../../types/Products';

interface FavoriteState {
	favorites: Products[];
}

const initialState: FavoriteState = {
	favorites: [],
};

const favoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		addFavorite(state, action: PayloadAction<Products>) {
			state.favorites.push(action.payload);
		},
		removeFavorite(state, action: PayloadAction<Products>) {
			state.favorites = state.favorites.filter(favorite => favorite._id !== action.payload._id);
		},
	},
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice;


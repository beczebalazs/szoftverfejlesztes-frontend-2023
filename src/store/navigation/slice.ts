import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavigationState {
	sidebar: {
		isOpen: boolean;
	};
	alertIsOpen: boolean;
	modalIsOpen: boolean;
	categoryDetailDrawerIsOpen: boolean;
	categoryParentId?: string;
	categoryDetailIsEdit: { index: number | undefined };
}

const initialState: NavigationState = {
	sidebar: {
		isOpen: true,
	},
	alertIsOpen: false,
	modalIsOpen: false,
	categoryDetailDrawerIsOpen: false,
	categoryParentId: undefined,
	categoryDetailIsEdit: { index: undefined },
};

const navigationSlice = createSlice({
	name: 'navigation',
	initialState,
	reducers: {
		toggleSidebar(state) {
			state.sidebar.isOpen = !state.sidebar.isOpen;
		},
		setSidebarIsOpen(state, action) {
			state.sidebar.isOpen = action.payload;
		},
		setAlertIsOpen(state, action: PayloadAction<boolean>) {
			state.alertIsOpen = action.payload;
		},
		setModalIsOpen(state, action: PayloadAction<boolean>) {
			state.modalIsOpen = action.payload;
		},
		setCategoryDrawerIsOpen(state, action: PayloadAction<boolean>) {
			state.categoryDetailDrawerIsOpen = action.payload;
		},
		setCategoryParentId(state, action: PayloadAction<string | undefined>) {
			state.categoryParentId = action.payload;
		},
		setIsEdit(state, action) {
			state.categoryDetailIsEdit.index = action.payload;
		},
	},
});

export const {
	setCategoryParentId,
	toggleSidebar,
	setSidebarIsOpen,
	setAlertIsOpen,
	setModalIsOpen,
	setIsEdit,
	setCategoryDrawerIsOpen,
} = navigationSlice.actions;

export default navigationSlice;


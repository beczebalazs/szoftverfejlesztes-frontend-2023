import { RootState } from "..";

export const alertIsOpenSelector = (state: RootState) => state.navigation.alertIsOpen;
export const modalIsOpenSelector = (state: RootState) => state.navigation.modalIsOpen;
export const categoryDetailIsOpenSelector = (state: RootState) =>
	state.navigation.categoryDetailDrawerIsOpen;
export const categoryParentIdSelector = (state: RootState) => state.navigation.categoryParentId;
export const categoryIsEditSelector = (state: RootState) =>
	state.navigation.categoryDetailIsEdit.index;


import { RootState } from "..";

const authTokenSelector = (state: RootState) => state.auth.authToken;

export { authTokenSelector };
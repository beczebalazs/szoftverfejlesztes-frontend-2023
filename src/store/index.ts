import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ThunkDispatch } from "redux-thunk";

import { Action, combineReducers, configureStore } from "@reduxjs/toolkit";

import navigationSlice from './navigation/slice';
import authSlice from "./auth/slice";
import favoriteSlice from "./favorites/favorites.slice";
import cartSlice from "./my-cart/slice";

export const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const rootReducer = combineReducers({
    [navigationSlice.name]: navigationSlice.reducer,
    [authSlice.name]: authSlice.reducer,
    [favoriteSlice.name]: favoriteSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,

});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AsyncDispatch = ThunkDispatch<RootState, void, Action>;

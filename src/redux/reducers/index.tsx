import rootSaga from "@Redux/sagas/rootSaga";
import { combineReducers } from "redux";
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import { loadingReducer } from "./loading";
import { accountReducer } from './account';
const persistConfig = {
  key: "root",
  storage,
  whitelist: []
};

const allReducers = combineReducers({
  // ...reducers
  loading: loadingReducer,
  account: accountReducer
});

const persistedReducer = persistReducer(persistConfig, allReducers);

const sagaMiddleware = createSagaMiddleware();
const middleware: any[] = [sagaMiddleware];

const isProduction = (process.env.NODE_ENV || "development") === "production";

if (!isProduction) {
  middleware.push(logger);
}

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false
    }).concat(middleware),
  devTools: !isProduction
});

sagaMiddleware.run(rootSaga);
const persister = persistStore(store);

export { store, persister as persister };
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;


export type Props<T> = {
  [P in keyof T]?: T[P];
};

export type Action<T> = {
  type: string;
  payload: Props<T>;
};
import rootSaga from "@Redux/sagas/rootSaga";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import { homeReducer } from "./home";
import { loadingReducer } from "./loading";
import { modalReducer } from "./modal";
const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const allReducers = combineReducers({
  // ...reducers
  loading: loadingReducer,
  modal: modalReducer,
  home: homeReducer,
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
      serializableCheck: false,
    }).concat(middleware),
  devTools: !isProduction,
});

sagaMiddleware.run(rootSaga);
const persister = persistStore(store);

export { store, persister as persister };
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

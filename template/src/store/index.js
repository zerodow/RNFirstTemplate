import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './reducers';
import {createMigrate, persistReducer, persistStore} from 'redux-persist';
import persistConfig from './persistConfig';

const storePersistConfig = persistConfig({
  key: '@digipro',
  migrate: createMigrate(
    {
      0: state => ({...state}),
    },
    {debug: false},
  ),
});

const persistedReducer = persistReducer(storePersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

let persistor = persistStore(store);

export {store, persistor};

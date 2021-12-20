import { configureStore } from '@reduxjs/toolkit';
import bookrackStore from './bookrackStore';
import bookReadStore from './bookReadStore';
import configStore from './configStore';

const store = configureStore({
  reducer: {
    bookrackStore,
    bookReadStore,
    configStore,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profileSlice';
import bookmarkReducer from './bookmarkSlice';

const store = configureStore({
  reducer: {
    profiles: profileReducer,
    bookmarks: bookmarkReducer,
  },
});

export default store;
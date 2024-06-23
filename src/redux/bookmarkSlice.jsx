import { createSlice } from '@reduxjs/toolkit';

const bookmarkSlice = createSlice({
  name: 'bookmarks',
  initialState: {
    items: [],
  },
  reducers: {
    addBookmark: (state, action) => {
      state.items.push(action.payload);
    },
    removeBookmark: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    clearBookmarks: (state) => {
      state.items = []; 
    },
  },
});

export const { addBookmark, removeBookmark, clearBookmarks } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;

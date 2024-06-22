import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProfiles = createAsyncThunk('profiles/fetchProfiles', async () => {
  const response = await axios.get('https://core.dev.kiido.app/collaboration-api/collaborator/');
  return response.data;
});

const profileSlice = createSlice({
  name: 'profiles',
  initialState: {
    items: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfiles.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchProfiles.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProfiles.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      });
  },
});

export default profileSlice.reducer;

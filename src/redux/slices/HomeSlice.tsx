import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {apiRequest} from '../../api/apiClient';

const initialState = {
  isLoading: false,
  homeItems: [],
};

export const GetHomeProducts = createAsyncThunk('GetHomeProducts', async () => {
  const response = await apiRequest('GET', 'https://fakestoreapi.com/products');
  if (response) {
    return response;
  } else {
    throw new Error('No products found');
  }
});

export const HomeSlice = createSlice({
  name: 'Home',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(GetHomeProducts.pending, state => {
        state.isLoading = true;
      })
      .addCase(GetHomeProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.homeItems = action.payload;
      })
      .addCase(GetHomeProducts.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const {} = HomeSlice.actions;
export default HomeSlice.reducer;

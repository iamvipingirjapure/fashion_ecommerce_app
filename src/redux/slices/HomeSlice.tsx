import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {apiRequest} from '../../api/apiClient';

const initialState = {
  isLoading: false,
  homeItems: [],
};

export const GetHomeProducts = createAsyncThunk('GetHomeProducts', async () => {
  // const response = await fetch('GET', 'https://fakestoreapi.com/products');
  // if (response) {
  //   return response;
  // } else {
  //   throw new Error('No products found');
  // }

  const response =await fetch("https://fakestoreapi.com/products")
  const data  = await response.json()

  if(data){
    return data
  }else{
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

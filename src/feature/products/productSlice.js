import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";

export const getMensProducts = createAsyncThunk(
  "product/get-mens-products",
  async (thunkAPI) => {
    try {
      return await productService.getMensProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getWomensProducts = createAsyncThunk(
  "product/get-womens-products",
  async (thunkAPI) => {
    try {
      return await productService.getWomensProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getMixedProducts = createAsyncThunk(
  "product/get-mixed-products",
  async (thunkAPI) => {
    try {
      return await productService.getMixedProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  products: [],
  mensProducts: [],
  womensProducts: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMensProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMensProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.mensProducts = action.payload;
      })
      .addCase(getMensProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getWomensProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWomensProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.womensProducts = action.payload;
      })
      .addCase(getWomensProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getMixedProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMixedProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getMixedProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});
export default productSlice.reducer;

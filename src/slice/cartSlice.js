import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartApi from "../api/cart";

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async () => {
    const response = await cartApi.CartList();
    return response.data;
  }
);

export const addCartItem = createAsyncThunk(
  "cart/addCartItem",
  async (itemRequest) => {
    const response = await cartApi.CartAdd(itemRequest);
    return response.data;
  }
);

export const updateCartItem = createAsyncThunk(
  "cart/updateCartItem",
  async ({ cartItemId, itemRequest }) => {
    const response = await cartApi.CartUpdate(cartItemId, itemRequest);
    return response.data;
  }
);

export const removeCartItem = createAsyncThunk(
  "cart/removeCartItem",
  async (cartItemId) => {
    const response = await cartApi.RemoveCart(cartItemId);
    return response.data;
  }
);

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(getCartItems.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.cartItems = action.payload;
    })

    builder.addCase(addCartItem.fulfilled, (state, action) => {
      const existingItemIndex = state.cartItems.findIndex(item => item.cartItemId === action.payload.cartItemId);
      if (existingItemIndex !== -1) {

        state.cartItems[existingItemIndex].quantity += 1;
      } else {

        state.cartItems.push(action.payload);
      }
    })

    builder.addCase(updateCartItem.fulfilled, (state, action) => {
      const updatedItemIndex = state.cartItems.findIndex(item => item.cartItemId === action.payload.cartItemId);
      if (updatedItemIndex !== -1) {
        state.cartItems[updatedItemIndex] = action.payload;
      } else {
        state.cartItems.push(action.payload);
      }
    })

    builder.addCase(removeCartItem.fulfilled, (state, action) => {
      const cartItemIdToRemove = action.meta.arg;
      state.cartItems = state.cartItems.filter(item => item.cartItemId !== cartItemIdToRemove);
    })
  },
});

// Export reducer
export default cartSlice.reducer;

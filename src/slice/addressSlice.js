import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import addressApi from "../api/address";

export const addressOfUser = createAsyncThunk(
  "address/addressOfUser",
  async () => {
    const response = await addressApi.AddressOfUser();
    return response.data;
  }
);

export const defaultAddress = createAsyncThunk(
  "address/defaultAddress",
  async () => {
    const response = await addressApi.DefaultAddress();
    return response.data;
  }
);

export const addAddress = createAsyncThunk(
  "address/addAddress",
  async (formData) => {
    const response = await addressApi.AddAddress(formData);
    return response.data;
  }
);

export const updateAddress = createAsyncThunk(
  "address/updateAddress",
  async ({ addressId, formData }) => {
    const response = await addressApi.UpdateAddress(addressId, formData);
    return response.data;
  }
);

export const deleteAddress = createAsyncThunk(
  "address/deleteAddress",
  async (addressId) => {
    const response = await addressApi.DeleteAddress(addressId);
    return response.data;
  }
);

const addressSlice = createSlice({
  name: "address",
  initialState: {
    addresses: [],
  },
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(addressOfUser.fulfilled, (state, action) => {
      state.addresses = action.payload;
    })

    builder.addCase(defaultAddress.fulfilled, (state, action) => {
      state.addresses = action.payload;
    })

    builder.addCase(addAddress.fulfilled, (state, action) => {
      state.addresses = [...state.addresses, action.payload];
    })

    builder.addCase(updateAddress.fulfilled, (state, action) => {
      const updatedItemIndex = state.addresses.findIndex(item => item.addressId === action.payload.addressId);
      if (updatedItemIndex !== -1) {
        state.addresses[updatedItemIndex] = action.payload;
      } else {
        state.addresses.push(action.payload);
      }
    })

    builder.addCase(deleteAddress.fulfilled, (state, action) => {
      const addressIdToRemove = action.meta.arg;
      state.addresses = state.addresses.filter(item => item.addressId !== addressIdToRemove);
    })
  }
})

export const selectAddresses = (state) => state.address.addresses;

export default addressSlice.reducer;

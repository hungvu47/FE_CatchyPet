import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import contactApi from "../api/contact";

export const fetchContactList = createAsyncThunk(
  "contact/fetchContactList",
  async () => {
    const response = await contactApi.ContactList();
    return response.data;
  }
);

export const customerContact = createAsyncThunk(
  "contact/customerContact",
  async formData => {
    const response = await contactApi.CustomerContact(formData);
    return response.data;
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    contacts: [],
  },
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(fetchContactList.fulfilled, (state, action) => {
      state.contacts = action.payload;
    })

    builder.addCase(customerContact.fulfilled, (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    })

  }
})

export default contactSlice.reducer;
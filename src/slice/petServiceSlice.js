import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import PetServiceApi from "../api/petService";

export const fetchAllService = createAsyncThunk(
  "service/fetchAllService",
  async () => {
    const response = await PetServiceApi.PetServiceList();
    return response.data;
  }
);

export const AddPetService = createAsyncThunk(
  "service/AddPetService",
  async (formData) => {
    const response = await PetServiceApi.AddPetService(formData);
    return response.data;
  }
);

export const UpdatePetService = createAsyncThunk(
  "service/UpdatePetService",
  async ({ petCareId, formData }) => {
    const response = await PetServiceApi.UpdatePetService(petCareId, formData);
    return response.data;
  }
);

export const DeletePetService = createAsyncThunk(
  "service/DeletePetService",
  async (petCareId) => {
    const response = await PetServiceApi.DeletePetService(petCareId);
    return response.data;
  }
);

const initialState = {
  petServices: [],
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(fetchAllService.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.petServices = action.payload;
    })

    builder.addCase(AddPetService.fulfilled, (state, action) => {
      state.petServices = [...state.petServices, action.payload];
    })

    builder.addCase(UpdatePetService.fulfilled, (state, action) => {
      const updatedItemIndex = state.petServices.findIndex(item => item.petCareId === action.payload.petCareId);
      if (updatedItemIndex !== -1) {
        state.petServices[updatedItemIndex] = action.payload;
      } else {
        state.petServices.push(action.payload);
      }
    })

    builder.addCase(DeletePetService.fulfilled, (state, action) => {
      const petCareIdToRemove = action.meta.arg;
      state.petServices = state.petServices.filter(item => item.petCareId !== petCareIdToRemove);
    })
  },
});

export default serviceSlice.reducer;
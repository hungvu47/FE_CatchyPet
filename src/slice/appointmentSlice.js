import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import appointmentApi from "../api/appointment";

export const fetchAllAppointment = createAsyncThunk(
  "appointment/fetchAllAppointment",
  async () => {
    const response = await appointmentApi.AllAppointment();
    return response.data;
  }
);

export const addAppointment = createAsyncThunk(
  "appointment/addAppointment",
  async (formData) => {
    const response = await appointmentApi.AddAppointment(formData);
    return response.data;
  }
);

export const updateAppointment = createAsyncThunk(
  "appointment/updateAppointment",
  async ({ appointmentId, dataReq }) => {
    const response = await appointmentApi.UpdateAppointment(appointmentId, dataReq);
    return response.data;
  }
);

export const removeAppointment = createAsyncThunk(
  "appointment/removeAppointment",
  async (appointmentId) => {
    const response = await appointmentApi.DeleteAppointment(appointmentId);
    return response.data;
  }
);

const appointmentSlice = createSlice({
  name: "appointment",
  initialState: {
    appointments: [],
  },
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(fetchAllAppointment.fulfilled, (state, action) => {
      state.appointments = action.payload;
    })

    builder.addCase(addAppointment.fulfilled, (state, action) => {
      state.appointments = [...state.appointments, action.payload];
    })

    builder.addCase(updateAppointment.fulfilled, (state, action) => {
      const updatedItemIndex = state.appointments.findIndex(item => item.appointmentId === action.payload.appointmentId);
      if (updatedItemIndex !== -1) {
        state.appointments[updatedItemIndex] = action.payload;
      } else {
        state.appointments.push(action.payload);
      }
    })

    builder.addCase(removeAppointment.fulfilled, (state, action) => {
      const appointmentToRemove = action.meta.arg;
      state.appointments = state.appointments.filter(item => item.appointmentId !== appointmentToRemove);
    })
  }
})

export default appointmentSlice.reducer;
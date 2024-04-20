import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../api/user";

export const UserList = createAsyncThunk(
  "user/UserList",
  async () => {
    const response = await userApi.UserList();
    return response.data;
  }
);

export const getUser = createAsyncThunk(
  "user/getUser",
  async () => {
    const response = await userApi.GetUser();
    return response.data;
  }
);

export const changePassword = createAsyncThunk(
  "user/ChangePassword",
  async (dataReq, thunkAPI) => {
    try {
      const response = await userApi.ChangePassword(dataReq);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loading: false,
    error: null,
    success: null
  },
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(UserList.fulfilled, (state, action) => {
      state.users = action.payload;
    })

    builder.addCase(getUser.fulfilled, (state, action) => {
      state.users = action.payload;
    })

    builder.addCase(changePassword.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(changePassword.fulfilled, (state, action) => {
      state.loading = false;
      state.success = action.payload;
    })
    builder.addCase(changePassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

  }
})

export default userSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import orderAPI from "../api/order";

export const allOrder = createAsyncThunk(
  "order/allOrder",
  async () => {
    const response = await orderAPI.OrderList();
    return response.data;
  }
)

export const payment = createAsyncThunk(
  "order/payment",
  async (orderRequest) => {
    const response = await orderAPI.Payment(orderRequest);
    return response.data;
  }
)

export const getOrderById = createAsyncThunk(
  "order/getOrderById",
  async (orderId) => {
    const response = await orderAPI.getOrderById(orderId);
    return response.data;
  }
)

export const orderOfUser = createAsyncThunk(
  "order/orderOfUser",
  async () => {
    const response = await orderAPI.GetOrderOfUser();
    return response.data;
  }
)

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
  },
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(allOrder.fulfilled, (state, action) => {
      state.orders = action.payload;
    })

    builder.addCase(payment.fulfilled, (state, action) => {
      state.orders = [...state.orders, action.payload];
    })

    builder.addCase(getOrderById.fulfilled, (state, action) => {
      state.orders = action.payload;
    })

    builder.addCase(orderOfUser.fulfilled, (state, action) => {
      state.orders = action.payload;
    })
  }
})

export default orderSlice.reducer;
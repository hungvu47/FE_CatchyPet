import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import productReducer from "../slice/productSlice";
import cartReducer from "../slice/cartSlice";
import addressReducer from "../slice/addressSlice";
import orderReducer from "../slice/orderSlice";
import petServiceReducer from "../slice/petServiceSlice";
import contactReducer from "../slice/contactSlice";
import userReducer from "../slice/userSlice";
import categoryReducer from "../slice/categorySlice";
import appointmentReducer from "../slice/appointmentSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    address: addressReducer,
    order: orderReducer,
    service: petServiceReducer,
    contact: contactReducer,
    user: userReducer,
    category: categoryReducer,
    appointment: appointmentReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
});
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApi from "../api/products";

export const getAllProduct = createAsyncThunk(
  "product/getAllProduct",
  async () => {
    const response = await productApi.ProductList();
    return response.data;
  }
);

export const fetchProductByCategory = createAsyncThunk(
  "product/fetchProductByCategory",
  async (categoryId) => {
    const response = await productApi.ProductByCategory(categoryId);
    return response.data;
  }
);

export const fetchProductById = createAsyncThunk(
  "product/fetchProductById",
  async (productId) => {
    const res = await productApi.ProductDetail(productId);
    return res.data;
  });

export const addNewProduct = createAsyncThunk(
  "product/AddNewProduct",
  async (dataReq) => {
    const response = await productApi.ProductAdd(dataReq);
    return response.data;
  }
);

export const removeProduct = createAsyncThunk("product/remove", async (productId) => {
  await productApi.RemoveProduct(productId);
  const response = await productApi.ProductList();
  return response.data;
});

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async ({ productId, dataReq }) => {
    const response = await productApi.ProductUpdate(productId, dataReq);
    return response.data;
  }
);

export const searchProduct = createAsyncThunk(
  "product/searchProduct",
  async (data) => {
    const res = await productApi.SearchProduct(data);
    return res.data;
  }
);

const initialState = {
  products: [],
  searchResults: [],
  status: "idle",
  error: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(getAllProduct.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.products = action.payload;
    });

    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.status = "succeeded";
      const existingProductIndex = state.products.findIndex(product => product.id === action.payload.id);
      if (existingProductIndex !== -1) {
        state.products[existingProductIndex] = action.payload;
      }
    });

    builder.addCase(addNewProduct.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.products = [...state.products, action.payload];
    });

    builder.addCase(removeProduct.fulfilled, (state, action) => {
      const productIdToRemove = action.meta.arg;
      state.products = state.products.filter(item => item.productId !== productIdToRemove);
    });

    builder.addCase(updateProduct.fulfilled, (state, action) => {
      const updatedItemIndex = state.products.findIndex(item => item.productId === action.payload.productId);
      if (updatedItemIndex !== -1) {
        state.products[updatedItemIndex] = action.payload;
      } else {
        state.products.push(action.payload);
      }
    });

    builder.addCase(searchProduct.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.searchResults = action.payload;
    });

    builder.addCase(fetchProductByCategory.fulfilled, (state, action) => {
      state.products = action.payload;
    })

    // Xử lý các trường hợp lỗi
    builder.addMatcher(
      (action) =>
        action.type.endsWith("/pending") ||
        action.type.endsWith("/fulfilled") ||
        action.type.endsWith("/rejected"),
      (state) => {
        state.status = "loading";
      }
    );
  },
});

export default productSlice.reducer;
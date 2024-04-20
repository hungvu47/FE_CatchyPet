import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryApi from "../api/category";

export const fetchAllCategory = createAsyncThunk(
  "category/fetchAllCategory",
  async () => {
    const response = await categoryApi.CategoryList();
    return response.data;
  }
);

export const addCategory = createAsyncThunk(
  "category/addCategory",
  async (dataReq) => {
    const response = await categoryApi.CategoryAdd(dataReq);
    return response.data;
  }
);

export const updateCategory = createAsyncThunk(
  "category/updateCategory",
  async ({ categoryId, dataReq }) => {
    const response = await categoryApi.CategoryUpdate(categoryId, dataReq);
    return response.data;
  }
);

export const removeCategory = createAsyncThunk(
  "category/removeCategory",
  async categoryId => {
    const response = await categoryApi.RemoveCategory(categoryId);
    return response.data;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
  },
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(fetchAllCategory.fulfilled, (state, action) => {
      state.categories = action.payload;
    })

    builder.addCase(addCategory.fulfilled, (state, action) => {
      state.categories = [...state.categories, action.payload];
    })

    builder.addCase(updateCategory.fulfilled, (state, action) => {
      const updatedItemIndex = state.categories.findIndex(item => item.categoryId === action.payload.categoryId);
      if (updatedItemIndex !== -1) {
        state.categories[updatedItemIndex] = action.payload;
      } else {
        state.categories.push(action.payload);
      }
    })

    builder.addCase(removeCategory.fulfilled, (state, action) => {
      const categoryIdToRemove = action.meta.arg;
      state.categories = state.categories.filter(item => item.categoryId !== categoryIdToRemove);
    })
  }
})

export const selectCategories = (state) => state.category.categories;

export default categorySlice.reducer;

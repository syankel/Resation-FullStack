import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GetAllCategories, GetOneCategory, DeleteCategory, AddCategory, UpdateCategory } from './CategoryApi'

const initialState = {
    arrCategories:
        [],
    status: "idle",
}
export const fetchOneCategory = createAsyncThunk("Category-get one Category by id specific", async (id) => {
    const response = await GetOneCategory(id);
    return response;
})
export const fetchDeleteCategory = createAsyncThunk("Category-delete one Category", async (category) => {
    const response = await DeleteCategory(category);
    return response;
})
export const fetchAddCategory = createAsyncThunk("Category-add one Category", async (category) => {
    const response = await AddCategory(category);
    return response;
})
export const fetchUpdateCategory = createAsyncThunk("Category-update one Category", async (category) => {
    const response = await UpdateCategory(category);
    return response;
})
export const CategorySlice = createSlice({

    name: 'Category',
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        builder.addCase(GetAllCategories.fulfilled, (state, action) => {
            state.arrCategories = action.payload
            state.status = "sucsess"
        }).addCase(GetAllCategories.rejected, (state, action) => {
            state.status = "failed"
        }).addCase(GetAllCategories.pending, (state, action) => {
            state.status = "pending"
        }).addCase(fetchOneCategory.fulfilled, (state, action) => {
            state.arrCategories = action.payload
            state.status = "sucsess"
        }).addCase(fetchOneCategory.rejected, (state, action) => {
            state.status = "failed"
        }).addCase(fetchOneCategory.pending, (state, action) => {
            state.status = "pending"
        }).addCase(fetchDeleteCategory.fulfilled, (state, action) => {
            state.arrCategories = action.payload
            state.status = "sucsess"
        }).addCase(fetchDeleteCategory.rejected, (state, action) => {
            state.status = "failed"
        }).addCase(fetchDeleteCategory.pending, (state, action) => {
            state.status = "pending"
        }).addCase(fetchAddCategory.fulfilled, (state, action) => {
            state.arrCategories = action.payload
            state.status = "sucsess"
        }).addCase(fetchAddCategory.rejected, (state, action) => {
            state.status = "failed"
        }).addCase(fetchAddCategory.pending, (state, action) => {
            state.status = "pending"
        }).addCase(fetchUpdateCategory.fulfilled, (state, action) => {
            state.arrCategories = action.payload
            state.status = "sucsess"
        }).addCase(fetchUpdateCategory.rejected, (state, action) => {
            state.status = "failed"
        }).addCase(fetchUpdateCategory.pending, (state, action) => {
            state.status = "pending"
        })
    }
})

export const { } = CategorySlice.actions

export default CategorySlice.reducer;
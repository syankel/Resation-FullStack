import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const GetAllCategories = createAsyncThunk("Category-get all Categories", async () => {
    let response = await axios.get("https://localhost:7125/api/Category/GetCategories")
    return response.data;
})

export const GetOneCategory = async (id) => {
    let response = await axios.get("https://localhost:7125/api/Category/GetCategoryById/" + id);
    return response;
}

export const DeleteCategory = async (Category) => {
    let response = await axios.delete("https://localhost:7125/api/Category/DeleteCategory", Category);
    return response;
}

export const AddCategory = async (Category) => {
    let response = await axios.post("https://localhost:7125/api/Category/AddCategory", Category);
    return response;
}

export const UpdateCategory = async (Category) => {
    let response = await axios.put("https://localhost:7125/api/Category/UpdateCategory", Category);
    return response;
}





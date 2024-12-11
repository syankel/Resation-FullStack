import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const GetAllUsers = createAsyncThunk("User-get all Users", async () => {
    let response = await axios.get("https://localhost:7125/api/User/GetUsers")
    return response.data;
})

export const GetOneUser = async (id) => {
    let response = await axios.get("https://localhost:7125/api/User/GetUserById/" + id);
    return response;
}

export const DeleteUser = async (User) => {
    let response = await axios.delete("https://localhost:7125/api/User/DeleteUser", User);
    return response;
}
export const AddUser = createAsyncThunk("user-addUser", async (newUser) => {
    const response = await axios.post("https://localhost:7125/api/User/AddUser", newUser)
    return response.data
})

export const UpdateUser = async ({ User }) => {
    let response = await axios.put("https://localhost:7125/api/User/UpdateUser", User);
    return response;
}





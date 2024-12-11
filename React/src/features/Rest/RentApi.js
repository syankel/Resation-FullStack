import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const GetAllRents = createAsyncThunk("Rent-get all Rents", async () => {
    let response = await axios.get("https://localhost:7125/api/Rent/GetRents")
    return response.data;
})

export const GetOneRent = async (id) => {
    let response = await axios.get("https://localhost:7125/api/Rent/GetApartemntById/" + id);
    return response;
}

export const DeleteRent = async (Rent) => {
    let response = await axios.delete("https://localhost:7125/api/Rent/DeleteApartemnt",  Rent );
    return response;
}

export const AddRent = createAsyncThunk("rent-addRent", async (newRent) => {
    const response = await axios.post("https://localhost:7125/api/Rent/AddRent", newRent)
    return response.data
})

export const UpdateRent = createAsyncThunk("Rent-get all Rents", async (Rent) => {
    let response = await axios.put("https://localhost:7125/api/Rent/UpdateRent", Rent)
    return response.data;
})





import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const GetAllApartments = createAsyncThunk("Apartment-get all Apartments", async () => {
    let response = await axios.get("https://localhost:7125/api/Apartment/GetApartemnts")
    return response.data;
})

export const UpdateApartment = createAsyncThunk("Apartment-put update apartment", async (apartment) => {
    let response = await axios.put("https://localhost:7125/api/Apartment/UpdateApartment", apartment)
    console.log("ressssssss", response);
})

export const GetOneApartment = async (id) => {
    let response = await axios.get("https://localhost:7125/api/Apartment/GetApartemntById/" + id);
    return response;
}

export const DeleteApartment = async (Apartment) => {
    let response = await axios.delete("https://localhost:7125/api/Apartment/DeleteApartemnt",  Apartment);
    return response;
}

export const AddApartment = async (Apartment) => {
    let response = await axios.post("https://localhost:7125/api/Apartment/AddApartment", Apartment);
    return response.data;
}





import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GetAllApartments, GetOneApartment, DeleteApartment, AddApartment, UpdateApartment } from './ApartmentApi'

const initialState = {
    arrApartments:
        [],
    status: "idle",
    currentApartment: null
}
export const fetchOneApartment = createAsyncThunk("Apartment-get one Apartment by id specific", async (id) => {
    const response = await GetOneApartment(id);
    return response;
})
export const fetchDeleteApartment = createAsyncThunk("Apartment-delete one Apartment", async ({ apartment }) => {
    const response = await DeleteApartment({ apartment });
    return response;
})
export const fetchAddApartment = createAsyncThunk("Apartment-add one Apartment", async (apartment) => {
    console.log("lllll", { apartment })
    const response = await AddApartment(apartment);
    console.log("data", response.data);

    return response.data;
})
export const apartmentSlice = createSlice({
    name: 'apartment',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(GetAllApartments.fulfilled, (state, action) => {
            state.currentApartment = action.meta.arg
            state.arrApartments = action.payload
            state.status = "sucsess"
        }).addCase(GetAllApartments.rejected, (state, action) => {
            state.status = "failed"
        }).addCase(GetAllApartments.pending, (state, action) => {
            state.status = "pending"
        })
            .addCase(fetchOneApartment.fulfilled, (state, action) => {
                state.currentApartment = action.payload
                state.status = "sucsess"
            }).addCase(fetchOneApartment.rejected, (state, action) => {
                state.status = "failed"
            }).addCase(fetchOneApartment.pending, (state, action) => {
                state.status = "pending"
            }).addCase(fetchDeleteApartment.fulfilled, (state, action) => {
                state.arrApartments = action.payload
                state.status = "sucsess"
            }).addCase(fetchDeleteApartment.rejected, (state, action) => {
                state.status = "failed"
            }).addCase(fetchDeleteApartment.pending, (state, action) => {
                state.status = "pending"
            }).addCase(fetchAddApartment.fulfilled, (state, action) => {
                state.currentApartment = action.meta.arg
                state.status = "sucsess"
            }).addCase(fetchAddApartment.rejected, (state, action) => {
                state.status = "failed"
                console.log('failed');
            }).addCase(fetchAddApartment.pending, (state, action) => {
                state.status = "pending"
                console.log('pending');
            }).addCase(UpdateApartment.fulfilled, (state, action) => {
                state.currentApartment = action.meta.arg
                state.status = "sucsess"
            }).addCase(UpdateApartment.rejected, (state, action) => {
                state.status = "failed"
            }).addCase(UpdateApartment.pending, (state, action) => {
                state.status = "pending"
            })
    }
})

export const { } = apartmentSlice.actions

export default apartmentSlice.reducer;
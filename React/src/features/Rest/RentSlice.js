import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GetAllRents, GetOneRent, DeleteRent, AddRent, UpdateRent } from './RentApi'

const initialState = {
    arrRents:
        [],
    status: "idle",
    currentRent: null
}
export const fetchOneRent = createAsyncThunk("Rent-get one Rent by id specific", async (id) => {
    const response = await GetOneRent(id);
    return response;
})
export const fetchDeleteRent = createAsyncThunk("Rent-delete one Rent", async ({ Rent }) => {
    const response = await DeleteRent({ Rent });
    return response;
})
export const fetchUpdateRent = createAsyncThunk("Rent-update one Rent", async ({ Rent }, id) => {
    const response = await UpdateRent({ Rent });
    return response;
})
export const RentSlice = createSlice({

    name: 'Rent',
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        builder.addCase(GetAllRents.fulfilled, (state, action) => {
            console.log("yes")
            state.arrRents = action.payload
            state.status = "sucsess"
        }).addCase(GetAllRents.rejected, (state, action) => {
            state.status = "failed"
        }).addCase(GetAllRents.pending, (state, action) => {
            state.status = "pending"
        })
            .addCase(fetchOneRent.fulfilled, (state, action) => {
                state.arrRents = action.payload
                state.status = "sucsess"
            }).addCase(fetchOneRent.rejected, (state, action) => {
                state.status = "failed"
            }).addCase(fetchOneRent.pending, (state, action) => {
                state.status = "pending"
            }).addCase(fetchDeleteRent.fulfilled, (state, action) => {
                state.arrRents = action.payload
                state.status = "sucsess"
            }).addCase(fetchDeleteRent.rejected, (state, action) => {
                state.status = "failed"
            }).addCase(fetchDeleteRent.pending, (state, action) => {
                state.status = "pending"
            }).addCase(AddRent.fulfilled, (state, action) => {
                state.currentRent = action.meta.arg
                state.status = "sucsess"
            }).addCase(AddRent.rejected, (state, action) => {
                state.status = "failed"
                console.log('failed');
            }).addCase(AddRent.pending, (state, action) => {
                state.status = "pending"
            }).addCase(fetchUpdateRent.fulfilled, (state, action) => {
                state.arrRents = action.payload
                state.status = "sucsess"
            }).addCase(fetchUpdateRent.rejected, (state, action) => {
                state.status = "failed"
            }).addCase(fetchUpdateRent.pending, (state, action) => {
                state.status = "pending"
            })
    }
})

export const { } = RentSlice.actions

export default RentSlice.reducer;
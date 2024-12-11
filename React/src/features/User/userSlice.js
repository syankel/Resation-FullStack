import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GetAllUsers, GetOneUser, DeleteUser, AddUser, UpdateUser } from './userApi'

const initialState = {
    arrUsers:
        [{}],
    password: "12345",
    name: "admin",
    status: "idle",
    isAdmin: false,
    isUser: false

}

export const fetchOneUser = createAsyncThunk("User-get one User by id specific", async (id) => {
    const response = await GetOneUser(id);
    return response;
})
export const fetchDeleteUser = createAsyncThunk("User-delete one User", async ({ User }) => {
    const response = await DeleteUser({ User });
    return response;
})
export const fetchUpdateUser = createAsyncThunk("User-update one User", async ({ User }) => {
    const response = await UpdateUser({ User });
    return response;
})
export const UserSlice = createSlice({

    name: 'User',
    initialState,
    reducers: {

        setIsAdmin: (state, action) => {
            state.isAdmin = action.payload
        },
        setIsUser: (state, action) => {
            state.isUser = action.payload
        },
    },

    extraReducers: (builder) => {
        builder.addCase(GetAllUsers.fulfilled, (state, action) => {
            state.arrUsers = action.payload
            state.status = "sucsess"
        }).addCase(GetAllUsers.rejected, (state, action) => {
            state.status = "failed"
        }).addCase(GetAllUsers.pending, (state, action) => {
            state.status = "pending"
        })
            .addCase(fetchOneUser.fulfilled, (state, action) => {
                state.arrUsers = action.payload
                state.status = "sucsess"
            }).addCase(fetchOneUser.rejected, (state, action) => {
                state.status = "failed"
            }).addCase(fetchOneUser.pending, (state, action) => {
                state.status = "pending"
            }).addCase(fetchDeleteUser.fulfilled, (state, action) => {
                state.arrUsers = action.payload
                state.status = "sucsess"
            }).addCase(fetchDeleteUser.rejected, (state, action) => {
                state.status = "failed"
            }).addCase(fetchDeleteUser.pending, (state, action) => {
                state.status = "pending"
            }).addCase(AddUser.fulfilled, (state, action) => {
                state.status = "sucsess"
            }).addCase(AddUser.rejected, (state, action) => {
                state.status = "failed"
            }).addCase(AddUser.pending, (state, action) => {
                state.status = "pending"
            }).addCase(fetchUpdateUser.fulfilled, (state, action) => {
                state.arrUsers = action.payload
                state.status = "sucsess"
            }).addCase(fetchUpdateUser.rejected, (state, action) => {
                state.status = "failed"
            }).addCase(fetchUpdateUser.pending, (state, action) => {
                state.status = "pending"
            })
    }
})

export const { setIsAdmin, setIsUser } = UserSlice.actions

export default UserSlice.reducer;
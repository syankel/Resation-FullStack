import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "../Category/CategorySlice";
import apartmentSlice from "../Apartmen/ApartmentSlice";
import userSlice from "../User/userSlice";
import RentSlice from "../Rest/RentSlice";


const store = configureStore({
    reducer: {
        category: CategorySlice,
        apartment: apartmentSlice,
        user:userSlice,
        rent:RentSlice
    }
})
export  default store
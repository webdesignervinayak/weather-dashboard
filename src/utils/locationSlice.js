import { createSlice } from "@reduxjs/toolkit";
import { defaultLocation } from "./constants";

const locationSlice = createSlice({
    name: "location",
    initialState : {
        locationDetails : defaultLocation,
    },
    reducers : {
        addLocationDetails : (state,action) => {
            state.locationDetails = action.payload;
        }
    }

})
;
export const {addLocationDetails} = locationSlice.actions;

export default locationSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { defaultWeather } from "./constants";

const weatherSlice = createSlice({
    name : "weather",
    initialState : {
        weatherDetails : defaultWeather,
    },
    reducers : {
        updateWeatherDetails : (state,action) => {
            state.weatherDetails = action.payload;
        }
    }
})

export const {updateWeatherDetails} = weatherSlice.actions ;

export default weatherSlice.reducer;
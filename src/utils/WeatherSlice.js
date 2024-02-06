import { createSlice } from "@reduxjs/toolkit";
import { defaultHourly, defaultWeather } from "./constants";

const weatherSlice = createSlice({
    name : "weather",
    initialState : {
        weatherDetails : defaultWeather,
        hourlyDetails : defaultHourly,
    },
    reducers : {
        updateWeatherDetails : (state,action) => {
            state.weatherDetails = action.payload;
        },
        updateHourlyDetails : (state,action) => {
            state.hourlyDetails = action.payload;
        }
    }
})

export const {updateWeatherDetails, updateHourlyDetails} = weatherSlice.actions ;

export default weatherSlice.reducer;
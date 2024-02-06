import { configureStore } from "@reduxjs/toolkit";
import locationSlice from "./locationSlice";
import WeatherSlice from "./WeatherSlice";
import chatSlice from "./chatSlice";

const appStore = configureStore({
    reducer : {
        location : locationSlice,
        weather : WeatherSlice,
        chat : chatSlice,
    },
});

export default appStore;
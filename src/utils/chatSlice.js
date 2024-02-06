import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name : "chat",
    initialState :{
        chatmessages : [],
    },
    reducers : {
        addChatMessages : (state,action) => {
            if(state.chatmessages.length >= 8){
                state.chatmessages.shift()
            }
            state.chatmessages.push(action.payload)
        }
    }
})

export const {addChatMessages} = chatSlice.actions;

export default chatSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
    name : "userInfo",
    initialState : {
        userName : "",
        userEmail : "",
        userPass : ""
    },
    reducers : {
        updateName : (state,action) => {
            state.userName=action.payload;
        },
        updateEmail : (state,action) => {
            state.userEmail=action.payload;
        },
        updatePass: (state,action) => {
            state.userPass=action.payload;
        }
    }
});

export const {updateName, updateEmail, updatePass} = userInfoSlice.actions;
export default userInfoSlice.reducer;

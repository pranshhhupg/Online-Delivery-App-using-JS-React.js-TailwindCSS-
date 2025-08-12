import { createSlice } from "@reduxjs/toolkit";

const OrderDetailsSlice = createSlice({
    name : "orderDetails",
    initialState : {
        copyItem : [],
        firstName : "",
        lastName : "",
        phone : "",
        address1 : "",
        address2 : "",
        landmark : "",
        email : "",
        billAmount : "",
    },

    reducers : {

        updateItems : (state,action) => {
            state.copyItem=action.payload;
        },

        updateFirstName : (state,action)=>{
            state.firstName=action.payload;
        },

        updateLastName : (state,action)=>{
            state.lastName=action.payload;
        },

        updatePhone : (state,action)=>{
            state.phone=action.payload;
        },

        updateAddress1 : (state,action)=>{
            state.address1=action.payload;
        },

        updateAddress2 : (state,action)=>{
            state.address2=action.payload;
        },

        updateLandmark: (state,action)=>{
            state.landmark=action.payload;
        },

        updateEmail : (state,action)=>{
            state.email=action.payload;
        },

        updateBillAmount : (state,action)=>{
            state.billAmount=action.payload;
        },


    }
})

export const {updateItems, updateAddress1,updateAddress2, updateBillAmount, updateEmail,updateFirstName,updateLandmark,updateLastName,updatePhone}=OrderDetailsSlice.actions;

export default OrderDetailsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : [],
        totalQuantity : 0,
        totalAmount : 0
    },
    reducers : {
        addToCart : (state,action)=>{
            const newItem=action.payload;
            const existingItem = state.items.find(item => item.card.info.id===newItem.card.info.id);

            if(existingItem){
                existingItem.quantity+=1;
            }
            else{
                state.items.push({...newItem,quantity:1});
            }

            state.totalQuantity+=1;
            state.totalAmount+=newItem.card.info.price ? newItem.card.info.price/100 : newItem.card.info.defaultPrice/100;
        },
        
        decreaseQuantity : (state,action)=>{
            const newItem=action.payload;
            const existingItem=state.items.find(item => item.card.info.id===newItem.card.info.id);

            if(existingItem && existingItem.quantity===1){
                state.items=state.items.filter(item => item.card.info.id!=existingItem.card.info.id);
                state.totalAmount-=existingItem.card.info.price ? existingItem.card.info.price/100 : existingItem.card.info.defaultPrice/100 ;
                state.totalQuantity-=1;
            }

            else if(existingItem && existingItem.quantity>1){
                existingItem.quantity-=1;
                state.totalQuantity-=1;
                state.totalAmount-=existingItem.card.info.price ? existingItem.card.info.price/100 : existingItem.card.info.defaultPrice/100;
            }
        },
        clearCart : (state)=>{
            state.items=[];
            state.totalAmount=0;
            state.totalQuantity=0;
        },
    },
});

export const { addToCart , decreaseQuantity , clearCart} = cartSlice.actions;

export default cartSlice.reducer;
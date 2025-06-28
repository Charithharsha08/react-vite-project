import type {CartItem} from "../Model/CartItems.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {ProductData} from "../Model/ProductData.ts";

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItemToCart(state: CartState, action: PayloadAction<ProductData>) {
            const existingItem = state.items.find((item) => item.product.id === action.payload.id);
            if (!existingItem) {
                state.items.push({
                   product: action.payload,
                     itemCount: 1
                })
            }
        },
        increaseQuantity(state: CartState, action: PayloadAction<number>) {
        const item =  state.items.find((existingItem) =>
            existingItem.product.id === action.payload);
        if (item) {
            item.itemCount += 1;
        }

        },
        decreaseQuantity(state: CartState, action: PayloadAction<number>) {
          const item = state.items.find((existingItem) =>
                existingItem.product.id === action.payload);
            if (item && item.itemCount > 1) {
                item.itemCount -= 1
            }
        },
    },
});

export default cartSlice.reducer;
export const {addItemToCart,increaseQuantity,decreaseQuantity} = cartSlice.actions;

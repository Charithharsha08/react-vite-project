import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type {ProductData} from "../Model/ProductData.ts";

interface ProductState {
    list: ProductData[];
    error: string | null | undefined;
}
const initialState: ProductState = {
    list: [],
    error: null
};

export const getAllProduct = createAsyncThunk(
    'products/getAllProducts',
    async () => {
        const response = await fetch('./product-data.json')
        return  await response.json()
    }
)



export const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProduct.pending, ()=> {
            alert("products are still loading");
        }).addCase(getAllProduct.fulfilled, (state, action) => {
                state.list = action.payload;
                state.error = null;
            }).addCase(getAllProduct.rejected, (state, action) => {
                state.error = action.error.message || 'Failed to fetch products';
            })
    }
})

export default productsSlice.reducer;
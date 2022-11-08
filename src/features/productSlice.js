import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchProdcuts = createAsyncThunk(
  "products/fetchProdcuts",
  async () => {
    const response = await fetch('http://localhost:5000/products')
    const data = await response.json()
    return data
  }
)

const initialState = {
  products: [],
  singleProduct: {},
}

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: {
    [fetchProdcuts.pending]: (state, { payload }) => {
      console.log("promise pending")
    },
    [fetchProdcuts.fulfilled]: (state, { payload }) => {
      return { ...state, products: payload }
    },
    [fetchProdcuts.rejected]: (state, { payload }) => {
      console.log("promise rejected")
    },
  },
})
export default productSlice.reducer

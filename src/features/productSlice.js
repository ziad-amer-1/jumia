import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchProdcuts = createAsyncThunk(
  "products/fetchProdcuts",
  async () => {
    const response = await fetch(
      "https://product-api-backend-dev.herokuapp.com/products"
    )
    const data = await response.json()
    return data
  }
)
export const fetchSingleProdcut = createAsyncThunk(
  "products/fetchSingleProdcut",
  async (productId) => {
    const response = await fetch(
      `https://product-api-backend-dev.herokuapp.com/products/${productId}`
    )
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
    [fetchSingleProdcut.pending]: (state, { payload }) => {
      console.log("promise pending")
    },
    [fetchSingleProdcut.fulfilled]: (state, { payload }) => {
      return { ...state, singleProduct: payload }
    },
    [fetchSingleProdcut.rejected]: (state, { payload }) => {
      console.log("promise rejected")
    },
  },
})
export default productSlice.reducer

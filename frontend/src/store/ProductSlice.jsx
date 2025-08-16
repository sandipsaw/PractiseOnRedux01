import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const ProductSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {
    loadProduct:(state,actions)=>{
        state.value = actions.payload
    }
  },
})

export const { loadProduct} = ProductSlice.actions

export default ProductSlice.reducer
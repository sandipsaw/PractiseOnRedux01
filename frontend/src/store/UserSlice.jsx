import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    loadUser:(state,actions)=>{
        state.value = actions.payload
    }
  },
})

export const { loadUser} = UserSlice.actions

export default UserSlice.reducer
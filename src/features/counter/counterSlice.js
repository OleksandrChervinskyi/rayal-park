import {createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        inc(state) {
            state.value++
        },
        dec(state) {
            state.value--
        },
        incCustom(state, action) {
            state.value = state.value + action.payload
        }
    }
})

export const {inc, dec, incCustom} = counterSlice.actions
export default counterSlice.reducer


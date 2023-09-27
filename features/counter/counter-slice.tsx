// DUCKS pattern
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

// Create an interface for the counter state
interface CounterState {
    value: number
}

// initial the data
const initialState: CounterState = {
    value: 0
}

// Now, create the slice with the logic
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // increase
        incremented(state) {
            // It is okay to do like this instead of return this value as 
            // Redux inner using immer which makes it immuable
            state.value ++
        },
        // amount added
        amountAdded(state, action: PayloadAction<number>){
            state.value += action.payload
        },
        // decrease
        decremented(state){
            state.value --
        },
        // reset
        reset(state){
            0
        }
    }
})

export const { incremented, amountAdded } = counterSlice.actions
// now, we need to export the reducer of the counter
export default counterSlice.reducer
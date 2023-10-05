// DUCKS pattern
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

// Create an interface for the counter state
interface CounterState {
    value: number
}

// initial the data
const initialState: CounterState = {
    value: 10
}

// Now, create the slice with the logic
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incremented: (state) => {
            state.value ++
        },
        // amount added
        amountAdded: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        // decrease
        decremented: (state) => {
            return {value: state.value --}
        },
        // reset
        reset: () => {
            return {value: 0}
        }
    }
})

export const { incremented, amountAdded } = counterSlice.actions
// now, we need to export the reducer of the counter
export default counterSlice.reducer
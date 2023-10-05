import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Breed } from '@/types/dogs'

interface DogsState {
    dogs: Breed[]
}

const initialState: DogsState = {
    dogs: []
}

const dogSlice = createSlice({
    name: 'dogs',
    initialState,
    reducers: {
        setDogs(state, action: PayloadAction<Breed[]>){
            state.dogs = action.payload
        },
        reset(state){
            []
        }
    }
})

export const { setDogs, reset } = dogSlice.actions
export default dogSlice.reducer
// Automatically import thunk middleware
import { configureStore } from "@reduxjs/toolkit"
import counterReducer from '@/redux/features/counter/counter-slice'
import { apiSlice } from '../features/dogs/dog-api-slice'
import dogReducer from '@/redux/features/dogs/dog-slice'

const store = configureStore({  
    reducer: {
        counter: counterReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        dog: dogReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware)
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
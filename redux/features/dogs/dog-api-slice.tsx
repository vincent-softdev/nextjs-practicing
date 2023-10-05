import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Breed } from '@/types/dogs'

const DOGS_API_KEY = 'cbfb51a2-84b6-4025-a3e2-ed8616edf311'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        // every api that we make will have this base url
        baseUrl: 'https://api.thedogapi.com/v1',
        prepareHeaders(headers) {
            // our api require a header key
            headers.set('x-api-key', DOGS_API_KEY)

            return headers
        }
    }),
    endpoints(builder){
        return {
            fetchBreeds: builder.query<Breed[], number|void>({
                query(limit = 10){
                    return `/breeds?limit=${limit}`
                }
            })
        }
    }
})

// Combine the name fetchBreeds with Query then create a Hook called useFetchBreedsQuery
export const { useFetchBreedsQuery } = apiSlice
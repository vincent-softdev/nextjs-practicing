'use client'
import { apiSlice }  from '@/redux/features/dogs/dog-api-slice'
import Loading from './loading';

const ListDogs = ()  => {
    const { data, isLoading } = apiSlice.useFetchBreedsQuery(10);
    
    // If it's loading, display the Loading component
    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            {
            data?.map((e, idx) => {
                return <div key={idx}>
                {e.name}
                </div>
            })
            }
        </div>
    )
}

export default ListDogs
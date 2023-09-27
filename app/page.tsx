'use client'

import { useAppDispatch, useAppSelector } from './hooks'
import { incremented, amountAdded } from '@/features/counter/counter-slice'
 
export default function Home() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(amountAdded(5))
  }

  return (
    <main>
      <p>Hello</p>

      <button onClick={handleClick} className='bg-black'>
        count is: {count}
      </button>
    </main>
  )
}

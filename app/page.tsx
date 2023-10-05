'use client'

import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks'
import { incremented, amountAdded } from '@/redux/features/counter/counter-slice'
import react, { useEffect } from 'react'

export default function Home() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(incremented());
    console.log(count);  // Note: this might not immediately reflect the updated value due to async nature of Redux.
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Add 5</button>

      <p>
      <a href="/products">Products page</a>
      </p>
    </div>
  );
}

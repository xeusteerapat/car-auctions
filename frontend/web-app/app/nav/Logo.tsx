import { AiOutlineCar } from 'react-icons/ai';
import React from 'react';

export default function Logo() {
  return (
    <div className='cursor-pointer flex items-center gap-2 text-3xl font-semibold text-red-500'>
      <AiOutlineCar size={34} />
      <div>Car Auctions</div>
    </div>
  );
}

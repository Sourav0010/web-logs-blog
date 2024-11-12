import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../index';

function Registration() {
   return (
      <div className='flex gap-4'>
         <Link to='/login'>
            <Button className='max-sm:hidden border border-black max-sm:text-xs max-sm:px-3 max-sm:py-1 px-6 font-medium py-2'>
               Login
            </Button>
         </Link>
         <Link to='/signup'>
            <Button className='text-white max-sm:text-xs max-sm:px-3 max-sm:py-1 bg-black px-6 py-2 border border-black'>
               Sign Up
            </Button>
         </Link>
      </div>
   );
}

export default Registration;

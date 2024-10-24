import React from 'react';
import { ChevronDoubleLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';

const ListCount = ({onListToggle, onClearListItems}) => {
  return (
    <>
    <div className='bg-white h-11 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full'>
      <div className='flex items-center gap-3'>
          <div className='grid items-center cursor-pointer' onClick={onListToggle} >
          <h1 className='text-base font-medium text-slate-900  hover:text-orange-500'> {"<<"} Go Back</h1>
          </div>
          <div className='grid items-center'>
              <h1 className='text-base font-medium text-slate-900'><span className='px-5'>Your WishList</span> </h1>
          </div>
      </div>
      <div className='flex items-center'>
          <button type='button' onClick={onClearListItems}  className='rounded bg-theme-cart active:scale-90 p-0.5'>
              <XMarkIcon className='w-5 h-5 text-white stroke-[2]' />
          </button>
      </div>
    </div>
 </>
  );
}

export default ListCount;

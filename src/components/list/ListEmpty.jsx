import React from 'react';
import emptylist from '../../assets/emptylist.jpeg';
import { ArrowLeftIcon  } from '@heroicons/react/24/outline';

const ListEmpty = ({ onListToggle }) => {
  return (
    <>
      <div className='flex items-center justify-center flex-col h-screen px-11 text-center gap-7'>
        <img
          src={emptylist}
          alt="emptybag/img"
          className='w-80 lg:w-36 sm:w-28 h-100 object-fill transition-all duration-300  py-5'
        />
        <button type='button' className='button-theme bg-gradient-to-b from-blue-200 to-blue-400 shadow-lg shadow-blue-600 flex items-center justify-center text-slate-900 py-2 gap-3 text-sm px-5 font-semibold active:scale-110 hover:scale-110'onClick={onListToggle} >
            <ArrowLeftIcon className='w-5 h-5 text-slate-900' />
            <span className='text-slate-900'>Back To Nike Store</span>
        </button>
      </div>
   </>
  );
}

export default ListEmpty;

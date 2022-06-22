import React from "react";

const InputForm = () => {
  return (
    <div className='col-span-2 p-6 grid gap-4'>
      <fieldset className='w-full space-y-1 dark:text-gray-100'>
        <label for='url' className='block text-sm font-medium'>
          Link Here
        </label>
        <div className='flex'>
          <span className='flex items-center px-3 pointer-events-none sm:text-sm rounded-l-md dark:bg-gray-700'>
            URL
          </span>
          <input
            type='text'
            name='url'
            id='url'
            placeholder='www.khalid-arnob.web.app'
            className='flex flex-1 border sm:text-sm rounded-r-md focus:ring-inset dark:border-gray-700 dark:text-gray-100 dark:bg-gray-800 focus:ring-violet-400'
          />
        </div>
        <div className='py-5'>
          <a
            class='inline-block p-[2px] rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring'
            href='/download'
          >
            <span class='block px-5 py-2 text-sm font-medium bg-gray-900 rounded-sm hover:bg-transparent'>
              Download
            </span>
          </a>
        </div>
      </fieldset>
    </div>
  );
};

export default InputForm;

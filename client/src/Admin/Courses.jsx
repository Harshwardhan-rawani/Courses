import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Courses() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className='text-black text-xl font-bold bg-white border-2 p-4'>
        Courses
      </div>
      <div className='mt-5 grid md:grid-cols-4 grid-cols-2 gap-5 m-10'>
        <Link to={"C"} className='shadow-xl cursor-pointer relative p-16 group transition duration-300 hover:bg-orange-500 flex justify-center w-full'>
          <div className='text-xl font-bold transition duration-300 text-black group-hover:text-white'>C Programing</div>
          <div className='absolute  right-5 top-5 group-hover:text-white text-red-500 text-xl'><MdDelete /></div>
        </Link>
      </div>
      <div
        className='m-10 bg-green-400 text-center p-3 font-bold cursor-pointer'
        onClick={toggleModal}
      >
        Add Courses
      </div>
      {isModalOpen && (
        <div
          id='course-model'
          className='fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50'
          tabIndex={-1}
          aria-hidden='true'
        >
          <div className='relative p-4 w-full max-w-md'>
            <div className='relative bg-white rounded-md shadow dark:bg-gray-700'>
              <div className='flex items-center justify-between p-4 md:p-5 rounded-t dark:border-gray-600'>
                <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
                  Add Course
                </h3>
                <button
                  type='button'
                  className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
                  onClick={toggleModal}
                >
                  <svg
                    className='w-3 h-3'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 14'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                    />
                  </svg>
                  <span className='sr-only'>Close modal</span>
                </button>
              </div>
              <div className='p-4 md:p-5'>
                <form className='space-y-4' action='#'>
                  <div>
                    <label
                      htmlFor='course'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Course Name
                    </label>
                    <input
                      type='text'
                      name='course'
                      id='course'
                      className='bg-gray-50 border-gray-300 text-gray-900 text-sm border-0 border-b-2 bg-transparent focus:ring-0 focus:border-b-orange-400 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                      placeholder='python?'
                      required=''
                    />
                  </div>
                  <button
                    type='submit'
                    className='w-full text-white bg-orange-500 hover:bg-orange-400 focus:ring-0 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                    onClick={toggleModal}
                  >
                    Add Course
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Courses;

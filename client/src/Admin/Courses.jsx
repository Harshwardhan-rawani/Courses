import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Courses() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseName, setCourseName] = useState('');
  const [image, setImage] = useState(null);
  const [courses, setCourses] = useState([]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/courses`);
        setCourses(res.data.courses);
      } catch (err) {
        toast.error(err.response?.data?.message || 'Failed to fetch courses');
      }
    };

    fetchCourses();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', courseName.toLowerCase());
    formData.append('image', image);

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/courses`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success(res.data.message);
      setCourseName('');
      setImage(null);
      toggleModal();
      const updatedCourses = await axios.get(`${import.meta.env.VITE_API_URL}/courses`);
      setCourses(updatedCourses.data.courses);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to add course');
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${import.meta.env.VITE_API_URL}/courses/${id}`);
      toast.success(res.data.message);

      const updatedCourses = await axios.get(`${import.meta.env.VITE_API_URL}/courses`);
      setCourses(updatedCourses.data.courses);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to delete course');
    }
  };

  return (
    <>
      <div className='text-black text-xl font-bold bg-white border-2 p-4'>
        Courses
      </div>
      <div className='mt-5 grid md:grid-cols-4 grid-cols-2 gap-5 m-10 '>
        {courses.map((course) => (
          <div key={course._id} className='shadow-xl cursor-pointer relative p-16 group transition duration-300 bg-orange-400 hover:bg-orange-500 flex flex-col items-center w-full'>
            {course.image && (
              <img src={`${import.meta.env.VITE_API_URL}/${course.image}`} alt={course.name} className='w-32 h-32 object-cover mb-4' />
            )}
            <Link to={`${course.name}`} className='text-xl font-bold transition duration-300 text-white group-hover:text-white capitalize'>{course.name}</Link>
            <div className='absolute right-5 top-5 group-hover:text-white text-red-700 text-2xl' onClick={() => handleDelete(course._id)}><MdDelete /></div>
          </div>
        ))}
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
                <form className='space-y-4' onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor='course'
                      className='block mb-2  text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Course Name
                    </label>
                    <input
                      type='text'
                      name='course'
                      id='course'
                      className='bg-gray-50 border-gray-300 text-gray-900 text-sm border-0 border-b-2 bg-transparent focus:ring-0 focus:border-b-orange-400 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                      placeholder='python?'
                      value={courseName}
                      onChange={(e) => setCourseName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='image'
                      className='block mb-2  text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Course Image
                    </label>
                    <input
                      type='file'
                      name='image'
                      id='image'
                      className='bg-gray-50 border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </div>
                  <button
                    type='submit'
                    className='w-full text-white bg-orange-500 hover:bg-orange-400 focus:ring-0 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
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

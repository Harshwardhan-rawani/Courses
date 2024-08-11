import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function Videos() {
  const [courses, setCourses] = useState([]);

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

  return (
    <>
    <div>
      <div className='text-black text-xl  font-bold bg-white border-2 p-4'>
        Videos
      </div>
      <br />
      <div className='w-full flex flex-col space-y-5 items-center'>
        {courses.map((course) => (
          <Link
          to = {`${course.name}`}
            key={course._id}
            className='text-white w-[90%] capitalize bg-green-400 hover:bg-green-500 focus:ring-0 font-medium text-sm px-5 py-3 text-start dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            {course.name}
          </Link>
        ))}
      </div>
    </div>
    <div className='h-5'></div>
    </>
  );
}

export default Videos;

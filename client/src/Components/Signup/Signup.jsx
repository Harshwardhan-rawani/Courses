import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import axios from 'axios';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/signup`, {
        username: formData.username,
        phone: formData.phone,
        email: formData.email,
        password: formData.password,
      });
      toast.success(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Signup failed");
    }
  };

  return (
    <>
      <div
        id="authentication-modals"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <div className='flex items-center space-x-2'>
                <FaUser className='text-black'/>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Signup
                </h3>
              </div>
              <button
                type="button"
                className="end-2.5 text-gray-400 bg-transparent hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="authentication-modals"
              >
                <svg
                  className="w-5 h-5 text-orange-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder='Username'
                    className="bg-gray-50 border-b-2 border-0 bg-transparent focus:outline-none focus:border-b-2 focus:ring-0 border-gray-300 focus:border-orange-400 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                    onChange={handleChange}
                    value={formData.username}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone number
                  </label>
                  <input
                    placeholder='+91-XXXX XXX XXX'
                    type="tel"
                    name="phone"
                    id="phone"
                    className="bg-gray-50 border-b-2 border-0 bg-transparent focus:outline-none focus:border-b-2 focus:ring-0 border-gray-300 focus:border-orange-400 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                    onChange={handleChange}
                    value={formData.phone}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border-b-2 border-0 bg-transparent focus:outline-none focus:border-b-2 focus:ring-0 border-gray-300 focus:border-orange-400 text-gray-900 text-sm  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    required
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border-b-2 border-0 bg-transparent border-gray-300 focus:outline-none focus:border-b-2 focus:border-orange-400 focus:ring-0 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                    onChange={handleChange}
                    value={formData.password}
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="••••••••"
                    className="bg-gray-50 border-b-2 border-0 bg-transparent border-gray-300 focus:outline-none focus:border-b-2 focus:border-orange-400 focus:ring-0 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                    onChange={handleChange}
                    value={formData.confirmPassword}
                  />
                </div>
                <button
                 data-modal-hide="authentication-modals"
                  type="submit"
                  className="w-full text-white transition duration-300 bg-orange-400 border-2 border-transparent hover:border-orange-400 hover:bg-transparent hover:text-orange-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Signup to your account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;

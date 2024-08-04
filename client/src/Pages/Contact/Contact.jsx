import React, { useState } from 'react'
import carousel1 from "../../assets/img/carousel-1.jpg"
import { FaUserCircle } from "react-icons/fa";
import Footer from '../../Components/Footer/Footer';
function Contact() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    feedback: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
  };

  return (
   <>
    <section className={`bg-center bg-no-repeat bg-gray-700 bg-blend-multiply bg-cover`} style={{ backgroundImage: `url(${carousel1}`}}>
  <div className="px-4 mx-auto max-w-screen-xl text-center py-14">
    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
Contact
    </h1>
    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
      Here at Flowbite we focus on markets where technology, innovation, and
      capital can unlock long-term value and drive economic growth.
    </p>
    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 mx-24 sm:mx-0">
          <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-orange-400 translate duration-300 hover:text-orange-400 hover:bg-transparent border-2 border-transparent hover:border-2 hover:border-orange-400 ">
              Get started
             
          </a>
          <a href="#" class="py-3 px-5 sm:ms-4 text-sm font-medium focus:outline-none text-white rounded-lg bg-orange-400 translate duration-300 hover:text-orange-400 hover:bg-transparent border-2 border-transparent hover:border-2 hover:border-orange-400  focus:z-10  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
              Learn more
          </a>  
      </div>
  </div>
</section>
<br />
<br />
<div className='mx-10'>
  <div className='flex'>
    <div className=' w-1/2 my-auto  items-center justify-center md:block hidden'>
   <div>
   
  <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
    <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png"
        className="dark:hidden h-[156px] md:h-[278px] w-full rounded-lg"
        alt=""
      />
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png"
        className="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg"
        alt=""
      />
    </div>
  </div>
  <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
    <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800" />
  </div>


   </div>

    </div>
    <div className="md:w-1/2 w-full flex justify-center items-center h-screen md:bg-gray-100 bg-white">
      <form 
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded shadow-md"
      > 
        <div className='text-7xl font-semibold text-center text-black flex justify-center'><FaUserCircle /></div>
        <h2 className="text-2xl font-semibold  text-center">Contact Us</h2>
        <h1 className='text-black text-center text-4xl font-bold'>Contact us</h1>
        <br />
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border-b-2 border-0 focus:ring-0 border-gray-300 "
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border-b-2 border-gray-300 border-0   focus:ring-0  "
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="feedback">
            Feedback
          </label>
          <textarea
            name="feedback"
            id="feedback"
            value={formData.feedback}
            onChange={handleChange}
            className="w-full px-3 py-2 border-b-2 border-gray-300 focus:ring-0 "
            placeholder="Enter your feedback"
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-orange-400 border-2 border-transparent translate duration-300 hover:bg-transparent hover:border-orange-400 hover:text-orange-400  text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
      </div>
  </div>
</div>
<br />
<Footer/>
   </>
  
  )
}

export default Contact

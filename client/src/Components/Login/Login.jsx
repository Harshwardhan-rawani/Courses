import React, { useContext, useState } from 'react';
import { FaUser } from "react-icons/fa";
import axios from 'axios';
import { AuthContext } from '../../Context/Authcontext';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {motion} from "framer-motion"
import Signup from '../Signup/Signup';


function Login({loginmenu,setLoginmenu}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signup, setsignup] = useState(false);
  const [error, setError] = useState('');
  const {token, login, logout} = useContext(AuthContext)

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
        email,
        password
      });
      toast.success(response.data.message)
      console.log(response.data.message)
      login(response.data.token)
     
    } catch (err) {
      setError('Login failed: ' + err.response.data.message);
      toast.error("Login failed")
    }
  };

  return (
    <>
    
      <motion.div
      initial = {{opacity : 0}}
      animate = {{opacity : 1}}
      transition={ {duration:2}}
       id="authentication-modal"
 
       className={` ${loginmenu?"":"hidden"} overflow-y-auto overflow-x-hidden flex bg-[#00000091]  fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[100%] max-h-full `}
     >
       <div className="relative p-4 w-full max-w-md max-h-full">
         {/* Modal content */}
         <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
           {/* Modal header */}
           <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
             <div className='flex items-center space-x-2'>
               <FaUser className='text-black' />
               <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                 Login
               </h3>
             </div>

             <button
               type="button"
               onClick={()=>{setLoginmenu(false)}}
               className="end-2.5 text-gray-400 bg-transparent hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
               data-modal-hide="authentication-modal"
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
           {/* Modal body */}
           <div className="p-4 md:p-5">
             <form className="space-y-4" onSubmit={handleSubmit}>
               <div>
                 <label
                   htmlFor="email"
                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                 >
                   Email
                 </label>
                 <input
                   type="email"
                   name="email"
                   id="email"
                   className="bg-gray-50 border-b-2 border-0 bg-transparent focus:outline-none focus:border-b-2 focus:ring-0 border-gray-300 focus:border-orange-400 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                   placeholder="name@company.com"
                   required=""
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                 />
               </div>
               <div>
                 <label
                   htmlFor="password"
                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                 >
                   Password
                 </label>
                 <input
                   type="password"
                   name="password"
                   id="password"
                   placeholder="••••••••"
                   className="bg-gray-50 border-b-2 border-0 bg-transparent border-gray-300 focus:outline-none focus:border-b-2 focus:border-orange-400 focus:ring-0 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                   required=""
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                 />
               </div>
               <div className="flex justify-between">
                 <div className="flex items-start">
                   <div className="flex items-center h-5">
                     <input
                       id="remember"
                       type="checkbox"
                       defaultValue=""
                       className="w-4 h-4 border border-gray-300 text-orange-400 rounded bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                       required=""
                     />
                   </div>
                   <label
                     htmlFor="remember"
                     className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                   >
                     Remember me
                   </label>
                 </div>
                 <a
                   href="#"
                   className="text-sm text-orange-400 hover:underline dark:text-blue-500"
                 >
                   Forgot Password?
                 </a>
               </div>
         
          
               <button
                 data-modal-hide="authentication-modal"
                 type="submit"
                 className="w-full text-white transition duration-300 bg-orange-400 border-2 border-transparent hover:border-orange-400 hover:bg-transparent hover:text-orange-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
               >
                 Login to your account
               </button>
               <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                 Not registered?{" "}
                 <a
                   href="#"
                   onClick={()=>{setsignup(!signup)}}
                   className="text-orange-400 hover:underline dark:text-blue-500"
                 >
                   Create account
                 </a>
               </div>
             </form>
           </div>
         </div>
       </div>
     </motion.div>
    
     <Signup signup={signup} setsignup={setsignup} />
    </>
  );
}

export default Login;

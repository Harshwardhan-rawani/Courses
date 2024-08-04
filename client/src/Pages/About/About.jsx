import React from 'react'
import carousel1 from "../../assets/img/carousel-1.jpg"
import Aboutclg from '../../Components/About/Aboutclg'
import Footer from '../../Components/Footer/Footer'
function About() {
  return (
   <>
    <section className={`bg-center bg-no-repeat  bg-gray-700 bg-blend-multiply bg-cover`} style={{ backgroundImage: `url(${carousel1}`}}>
  <div className="px-4 mx-auto max-w-screen-xl text-center py-14">
    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
About
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
<Aboutclg/>
<Footer/>
   </>
  
  )
}

export default About

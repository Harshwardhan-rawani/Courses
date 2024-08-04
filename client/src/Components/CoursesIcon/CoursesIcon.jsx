import React from 'react';
import { motion } from 'framer-motion';

import react from '../../assets/svg/react.svg';
import html from '../../assets/svg/html.svg';
import css from '../../assets/svg/css.svg';
import nodejs from '../../assets/svg/nodejs.svg';
import js from '../../assets/svg/js.svg';
import python from '../../assets/svg/python.svg';
import monogdb from '../../assets/svg/monogdb.svg';
import sql from '../../assets/svg/sql.svg';

function CoursesIcon() {
  return (
    <>
      <h1 className="text-center text-black text-4xl mb-10 font-bold ">Courses</h1>
      <div className="lg:mx-32 mx-5 flex flex-wrap justify-center gap-5">
        <motion.div 
                
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, amount: 0.5 }}
                   transition={{ duration: 0.6, ease: 'easeOut' }}
        className="grid lg:grid-cols-4 grid-cols-1 gap-5 w-full">
          {[html, css, python, js, react, nodejs, sql, monogdb].map((item, index) => (
            <div
            key={index}
              className="px-10 py-5 shadow-xl transition duration-500 hover:-translate-y-2 hover:bg-orange-400"
            >
              <img src={item} className="w-24 block mx-auto" alt="" />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default CoursesIcon;

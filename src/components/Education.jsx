import React from 'react'
import upn from "../assets/logo_upn-removebg-preview.png"
import { motion } from "motion/react";

const Education = () => {
  return (
    <div className='border-b border-neutral-900'>
        <h2 className='my-20 text-center text-4xl'>Education</h2>
        <div className='mb-8 flex flex-wrap sm:justify-center lg:justify-center'>
            <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="lg:w-1/4 lg:pl-20">
                    <p className='mb-2 text-md text-neutral-400'>August 2022 - Present</p>
            </motion.div>
            <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4 lg:pl-20 sm:text-center lg:text-justify">
                <h6 className='mb-4 font-semibold bg-gradient-to-r from-amber-200 via-slate-500 to-yellow-500 bg-clip-text text-3xl tracking-light text-transparent'>
                    Universitas Pembangunan Nasional "Veteran" Jakarta
                </h6>
                <p className='mb-4 text-neutral-400'>Undergraduate Information System</p>
                <p className='mb-4 text-neutral-400'>GPA 3.88</p>
            </motion.div>
            </div>
    </div>
  )
}

export default Education
import React from 'react'
import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/myprofile.jpg"
import { motion } from "motion/react";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0, 
        opacity: 1, 
        transition: {duration: 0.5, delay: delay},
    } 
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap md:justify-center sm:justify-center">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className='pb-16 text-6xl font-extralight tracking-tight lg:mt-16 lg:text-8xl'>
                        Ahmad Ro'in Fannani
                    </motion.h1>
                    <motion.span 
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className='bg-gradient-to-r from-sky-300 via-slate-500 to-blue-500 bg-clip-text text-3xl tracking-light text-transparent'>
                        Data Enthusiast / Web Developer
                    </motion.span>
                    <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className='text-justify my-2 max-w-xl motion.py-6 font-light tracking-tighter'>{HERO_CONTENT}</motion.p>
                </div>
            </div>
            <div className="mt-2 lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img
                    className='rounded-2xl'
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1}}
                    transition={{ duration: 1, delay: 0.5 }}
                    src={profilePic} alt="Profile" 
                    width={500}
                    height={500}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
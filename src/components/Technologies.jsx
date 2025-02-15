import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { SiLooker } from "react-icons/si";
import { DiPython } from "react-icons/di";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";


import { motion } from "motion/react";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10], 
        transition: { 
            duration: duration, 
            ease: "linear",
            repeat: Infinity, 
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{opacity: 0, x: -100}}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate" 
            className="rounded-full border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate" 
            className="rounded-full border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className='text-7xl text-sky-500'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate" 
            className="rounded-full border-4 border-neutral-800 p-4">
                <SiMysql className='text-7xl text-blue-500'/>
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"  
            className="rounded-full border-4 border-neutral-800 p-4">
                <FaLaravel className='text-7xl text-red-700'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate" 
            className="rounded-full border-4 border-neutral-800 p-4">
                <SiLooker className='text-7xl text-sky-300'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate" 
            className="rounded-full border-4 border-neutral-800 p-4">
                <DiPython className='text-7xl text-sky-700'/>
            </motion.div>
        </motion.div>

        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{opacity: 0, x: -100}}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 my-6">
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate" 
            className="rounded-full border-4 border-neutral-800 p-4">
                <FaHtml5 className='text-7xl text-orange-600'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate" 
            className="rounded-full border-4 border-neutral-800 p-4">
                <FaCss3Alt className='text-7xl text-sky-500'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate" 
            className="rounded-full border-4 border-neutral-800 p-4">
                <FaJs className='text-7xl text-yellow-500'/>
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"  
            className="rounded-full border-4 border-neutral-800 p-4">
                <FaPhp className='text-7xl text-purple-400'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate" 
            className="rounded-full border-4 border-neutral-800 p-4">
                <FaNodeJs className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate" 
            className="rounded-full border-4 border-neutral-800 p-4">
                <SiExpress className='text-7xl'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies
import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "motion/react";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'>Projects</motion.h2>
        <div>{PROJECTS.map((project, index) => (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4">
                    <a href={project.link} target='_blank' className="relative group inline-block">
                        <img 
                        src={project.image} 
                        alt={project.title} 
                        width={200} 
                        height={200} 
                        className='z-0 mb-6 rounded cursor-pointer grayscale brightness-50 hover:scale-110 duration-150 hover:grayscale-0 hover:brightness-100'
                        />
                        <p className="
                        absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        -mt-3 px-2 py-2 text-white border text-center border-white rounded-xl 
                        z-10 group-hover:hidden backdrop-blur-md">
                        Tap To See More
                        </p>
                    </a>
                </motion.div>

                <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={ {opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4">
                    <a href={project.link} target='_blank' className='mb-2 font-semibold hover:underline'>{project.title}</a>
                    <p className='mb-4 text-neutral-400 text-justify'>{project.description}</p>
                    {project.technologies.map((tech, index) => (
                        <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-sky-500'>{tech}</span>
                    ))}
                    <br />
                </motion.div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Projects
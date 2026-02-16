import { EXPERIENCES } from '../constants'
import { motion } from "motion/react";

const Experience = ({language}) => {
  return (
    <div className="border-b border-neutral-900">
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'>
            {language === 'en' ? 'Organizational Experience' : 'Pengalaman Organisasi'}
        </motion.h2>
        <div>
            {EXPERIENCES[language].map((experience, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/4">
                        <p className='mb-2 text-md text-neutral-400'>{experience.year}</p>
                    </motion.div>
                    <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-xl lg:w-3/4">
                        <h6 className='mb-2 font-semibold'>
                            {experience.role} <br></br> {" "}
                            <a href={experience.profile_link} target='_blank' className='text-sm cursor-pointer text-purple-100 hover:underline'>
                                {experience.company}
                            </a>
                        </h6>
                        <p className='mb-4 text-neutral-400 text-justify'>{experience.description}</p>
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experience
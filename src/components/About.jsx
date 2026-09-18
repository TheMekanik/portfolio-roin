import aboutImg from '../assets/about_photo.jpeg'
import { ABOUT_TEXT } from '../constants'
import { motion } from "motion/react";


const About = ({language}) => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        {language === 'en' ? 'About' : 'Tentang'}
        <span className="text-neutral-500">
          {' '}
          {language === 'en' ? 'Me' : 'Saya'}
        </span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="relative overflow-hidden rounded-2xl aspect-video">
            <video
              src="https://res.cloudinary.com/dh1vjjwtn/video/upload/v1789733884/Codeee_kirgo3.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-justify">
              {language === 'en' ? ABOUT_TEXT.en : ABOUT_TEXT.id}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About
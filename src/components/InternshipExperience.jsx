import { INTERNSHIP } from '../constants';
import { motion } from 'motion/react';

const InternshipExperience = ({language}) => {
  return (
    <div className="border-b border-neutral-900">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        {language === 'en' ? 'Internship Experience' : 'Pengalaman Magang'}
      </motion.h2>
      <div>
        {INTERNSHIP[language].map((experience, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center lg:gap-8"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full h-fit lg:w-1/4 mb-8 overflow-hidden"
            >
              <img
                src="./src/assets/FotoDepanLogoAdira.jpeg"
                alt="FotoMagang"
                className="w-full object-cover rounded-lg max-h-[60%]"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} <br></br>{' '}
                <p
                  className="text-sm cursor-pointer text-purple-100 hover:underline"
                >
                  {experience.company}
                </p>
                <p className="text-[12px]">{experience.year}</p>
              </h6>
              <p className="mb-4 text-neutral-400 text-justify">
                {experience.description}
              </p>

              <a
                href="https://drive.google.com/file/d/1OTrk7yis3Bff2z-NucO-wBsTUTsgPQY_/view?usp=drive_link" target='_blank'
                className="py-2 px-4 bg-gray-600 rounded-lg text-white cursor-pointer hover:bg-gray-900"
              >
                {language === 'en' ? 'Internship Certificate' : 'Sertifikat Magang'}
              </a>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternshipExperience;

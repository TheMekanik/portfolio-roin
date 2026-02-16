import { COMPETITION } from '../constants';
import { motion } from 'motion/react';

const CompetitionExperience = ({language}) => {
  return (
    <div className="border-b border-neutral-900">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        {language === 'en' ? 'Competition Experience' : 'Pengalaman Berkompetisi'}
      </motion.h2>
      <div>
        {COMPETITION[language].map((comp, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center lg:gap-8"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full h-fit lg:w-1/4 mb-8 overflow-hidden relative group cursor-pointer rounded-lg"
            >
              <a
                href="https://www.instagram.com/naverglasses?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <img
                  src="./src/assets/PIMNAS25_NaverGlasses.jpeg" 
                  alt="FotoMagang"
                  className="w-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-bold text-lg tracking-wider">
                    {language === 'en' ? 'See More' : 'Selengkapnya'}
                  </span>
                </div>
              </a>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {comp.competiton} <br></br>{' '}
                <p className="text-sm cursor-pointer text-purple-100 hover:underline">
                  {comp.event}
                </p>
                <p className="text-[12px]">{comp.year}</p>
              </h6>
              <p className="mb-4 text-neutral-400 text-justify">
                {comp.description}
              </p>

              <a
                href="https://drive.google.com/file/d/1Freuwe_KJYIGzR7ll3_ix_WRM3nc3-52/view?usp=sharing"
                target="_blank"
                className="py-2 px-4 bg-gray-600 rounded-lg text-white cursor-pointer hover:bg-gray-900"
              >
                {language === 'en' ? 'Competition Certificate' : 'Sertifikat Kompetisi'}
              </a>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompetitionExperience;

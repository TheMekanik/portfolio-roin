import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';


const Navbar = ({language, toggleLanguage}) => {
  return (
    <nav className="fixed left-0 right-0 z-50 backdrop-blur-md bg-neutral-950/50 border-b border-neutral-800/50">
      <div className="flex items-center justify-between container mx-auto px-8">
        <div className="flex flex-shrink-0 items-center gap-4">
          <h1 className="font-medium text-5xl">Arf.</h1>

          <button
            onClick={toggleLanguage}
            className="ml-4 rounded-full border-2 border-neutral-700 px-4 py-1 text-md font-semibold transition-colors hover:bg-neutral-800 hover:text-white"
          >
            {language === 'en' ? 'EN' : 'ID'}
          </button>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/ahmad-roin" target="_blank">
            <FaLinkedin className="cursor-pointer text-4xl hover:text-blue-500" />
          </a>
          <a href="https://github.com/TheMekanik" target="_blank">
            <FaGithub className="cursor-pointer text-4xl hover:text-sky-300" />
          </a>
          <a href="https://www.instagram.com/mad.roinn/" target="_blank">
            <FaInstagram className="cursor-pointer text-4xl hover:text-pink-500" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
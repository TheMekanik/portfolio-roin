import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import InternshipExperience from './components/InternshipExperience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import CompetitionExperience from './components/CompetitionExperience';
import { useState } from 'react';

const App = () => {
    const [language, setLanguage] = useState('en')

    const toggleLanguage = () => {
      setLanguage((prevLang) => (prevLang === 'en' ? 'id' : 'en'))
    }

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar language={language} toggleLanguage={toggleLanguage} />
        <Hero language={language} />
        <About language={language} />
        <Education language={language} />
        <Technologies />
        <InternshipExperience language={language} />
        <CompetitionExperience language={language} />
        <Experience language={language} />
        <Projects language={language} />
        <Contact language={language} />
      </div>
    </div>
  );
};

export default App;

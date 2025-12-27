import Header from './components/Header';
import Hero from './components/Hero';
import SkillsMarquee from './components/SkillsMarquee';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SkillsMarquee />
      <Services />
      <Experience />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;

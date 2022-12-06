import { SliderData } from '../data/SliderData';
import Hero from '../components/Hero/Hero';
import AboutSection from '../components/AboutSection';
import Services from '../components/servicios';
import Projects from '../components/Projects';
import Contact from '../components/contact';

const Home = () => {
  return (
    <div>
      <Hero id="home" slides={SliderData} />
      <AboutSection
        id="about"
        title="About Public page"
        classes="title"
        bgClr={'var(--orangeClr)'}
      />
      <Services id="service" />
      {/* <Projects id="project" /> */}
      <Contact id="contact" />
    </div>
  );
};

export default Home;

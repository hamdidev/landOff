import About from "../components/About/About";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";
import Work from "../components/Content/Work";
import Testimonials from "../components/Testimonials/Testimonials";
import { Contact } from "../components/Contact/Contact";
import Form from "../components/Form/Form";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Work />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;

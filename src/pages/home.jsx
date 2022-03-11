import styled from "styled-components";
import { Title } from "../components/title";
import { Carousel } from "../components/carousel";
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import {TestimonialsSection} from "../components/TestimonialsSection"


export const Home = ({setGame}) => {
  setGame(false);
  return (
    <div>
      <Title />
      <Carousel title="Newest Games"/>
      <Carousel title="Most Popular"/>
      <Carousel title="Most Played"/>
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
    </div>
  );
};



import styled from "styled-components";
import { Title } from "../components/title";
import { Carousel } from "../components/carousel";

export const Home = () => {
  return (
    <div>
      <Title />
      <Carousel title="Newest Games"/>
      <Carousel title="Most Popular"/>
      <Carousel title="Most Played"/>
    </div>
  );
};



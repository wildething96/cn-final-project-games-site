import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { GameCard } from "./gameCard";
import { gameData } from "../utils/gameData";

export const Carousel = (props) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div>
      <CarouselTitle>{props.title}</CarouselTitle>
      <OuterCarousel ref={carousel} whileTap={{ cursor: "grabbing" }}>
        <InnerCarousel drag="x" dragConstraints={{ right: 0, left: -width }}>
          {gameData.map((game) => (
            <GameCard
              key={gameData.indexOf(game)}
              title={game.title}
              img={game.img}
              description={game.description}
            />
          ))}
        </InnerCarousel>
      </OuterCarousel>
    </div>
  );
};

const OuterCarousel = styled(motion.div)`
  margin: 3rem auto;
  width: 75%;
  cursor: grab;
  overflow: hidden;
  overflow-y: visible;
  border-radius: 20px;
  border-right: 10px solid lightgrey;
  border-left: 10px solid lightgrey;
  z-index: -1;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  // box-shadow: -2000px 0px 10px -100px #803c71, 2000px 0px 10px -100px #803c71;
`;

const InnerCarousel = styled(motion.div)`
  display: flex;
  flex-flow: row nowrap;
  padding: 2.8rem;
`;

const CarouselTitle = styled.h2`
  color: lightgrey;
  font-size: 2em;
  width: 75%;
  margin: 10rem 0 0 16%;
  text-shadow: 0 0 0.05em #fff, 0 0 0.2em white, 0 0 0.3em #fe05e1;
  text-decoration: underline;
`;

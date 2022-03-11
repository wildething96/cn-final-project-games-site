import React from "react";
import styled from "styled-components";
import { Tetris } from "../components/Tetris";

export const TetrisGame = () => {
  return (
    <>
      <Tetris />
    </>
  );
};

const Title = styled.h1`
  margin-top: 8rem;
  padding-right: 12%;
  text-align: center;
  font-size: 5em;
`;

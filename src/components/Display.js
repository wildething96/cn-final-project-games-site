import React from "react";
import { StyledDisply } from "./styles/StyledDiplay";

const Display = ({gameOver, text}) => (
    <StyledDisply gmaeOver={gameOver}>{text}</StyledDisply>
)

export default Display
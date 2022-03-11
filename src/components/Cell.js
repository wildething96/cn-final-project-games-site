import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../utils/tetromino';

// React.memo makes sure we only re-render the changed cells
export const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color}>
    {console.log('rerender cell')}
  </StyledCell>
);

export default React.memo(Cell);
import React, { useState } from 'react';
import {
  CellInput,
  GameTable,
  GameTableBody,
  GameTableData,
  GameTableRow,
  PageContainer,
} from './styles';

const PlayGround = () => {
  const [grid, setGrid] = useState(
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  );

  return (
    <PageContainer>
      <GameTable>
        <GameTableBody></GameTableBody>
      </GameTable>
    </PageContainer>
  );
};

export default PlayGround;

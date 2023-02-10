import React from 'react';
import {
  CellInput,
  GameTable,
  GameTableBody,
  GameTableData,
  GameTableRow,
  PageContainer,
} from './styles';

const cellNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const PlayGround = () => {
  return (
    <PageContainer>
      <GameTable>
        <GameTableBody>
          {cellNumbers.map((row, rowIndex) => {
            return (
              <GameTableRow key={rowIndex}>
                {cellNumbers.map((column, columnIndex) => {
                  return (
                    <GameTableData key={rowIndex + columnIndex}>
                      <CellInput />
                    </GameTableData>
                  );
                })}
              </GameTableRow>
            );
          })}
        </GameTableBody>
      </GameTable>
    </PageContainer>
  );
};

export default PlayGround;

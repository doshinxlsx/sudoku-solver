import React from 'react';
import { Spinner } from './components';
import { usePlayGround } from './hooks';
import {
  ButtonContainer,
  CellInput,
  GameTable,
  GameTableBody,
  GameTableData,
  GameTableRow,
  PageContainer,
  SolveButton,
  ResetButton,
  GameTitle,
} from './styles';

const PlayGround = () => {
  const { grid, handleChange, handleKeyPress, loading, resetGrid, solve, userDefined } =
    usePlayGround();

  return (
    <PageContainer>
      <GameTitle>Sudoku Solver</GameTitle>
      <GameTable>
        <GameTableBody>
          {grid.map((row, rowIndex) => (
            <GameTableRow key={rowIndex}>
              {row.map((column, columnIndex) => {
                const index = rowIndex * 9 + columnIndex;
                const isUserDefined = userDefined.includes(index);

                return (
                  <GameTableData key={columnIndex}>
                    <CellInput
                      type='text'
                      maxLength='1'
                      value={grid[rowIndex][columnIndex] || ''}
                      onChange={(e) => handleChange(e, rowIndex, columnIndex)}
                      onKeyPress={handleKeyPress}
                      columnIndex={columnIndex}
                      rowIndex={rowIndex}
                      isUserDefined={isUserDefined}
                    />
                  </GameTableData>
                );
              })}
            </GameTableRow>
          ))}
        </GameTableBody>
      </GameTable>
      <ButtonContainer>
        <SolveButton onClick={solve}>{loading ? <Spinner /> : 'Solve'}</SolveButton>
        <ResetButton onClick={resetGrid}>Reset</ResetButton>
      </ButtonContainer>
    </PageContainer>
  );
};

export default PlayGround;

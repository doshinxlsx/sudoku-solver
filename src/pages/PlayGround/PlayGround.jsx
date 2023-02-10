import React, { useState } from 'react';
import {
  CellInput,
  GameTable,
  GameTableBody,
  GameTableData,
  GameTableRow,
  PageContainer,
  SolveButton,
} from './styles';

const PlayGround = () => {
  const [grid, setGrid] = useState(emptyGrid());

  const handleChange = (event, rowIndex, columnIndex) => {
    const updatedGrid = [...grid];
    updatedGrid[rowIndex][columnIndex] = event.target.value;
    setGrid(updatedGrid);
  };

  const handleKeyPress = (event) => {
    const charCode = event.charCode || event.which;

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  };

  const solve = () => {
    if (!isSolvable(grid)) {
      alert('Invalid or unsolvable puzzle.');
      return;
    }

    let solvedGrid = [...grid];
    isSolvable(solvedGrid);

    setGrid(solvedGrid);
  };

  const solveSudoku = (grid) => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (grid[i][j] === 0) {
          for (let k = 1; k <= 9; k++) {
            if (isValid(grid, i, j, k)) {
              grid[i][j] = k;

              if (solveSudoku(grid)) {
                return grid;
              } else {
                grid[i][j] = 0;
              }
            }
          }
          return false;
        }
      }
    }
    return grid;
  };

  const isValid = (grid, row, column, number) => {
    for (let i = 0; i < 9; i++) {
      if (grid[row][i] === number || grid[i][column] === number) {
        return false;
      }
    }

    const rowStart = Math.floor(row / 3) * 3;
    const columnStart = Math.floor(column / 3) * 3;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (grid[rowStart + i][columnStart + j] === number) {
          return false;
        }
      }
    }
    return true;
  };

  const isSolvable = (grid) => {
    for (let row = 0; row < 9; row++) {
      for (let column = 0; column < 9; column++) {
        if (grid[row][column] === 0) {
          for (let number = 1; number <= 9; number++) {
            if (isValid(grid, row, column, number)) {
              grid[row][column] = number;

              if (isSolvable(grid)) {
                return true;
              } else {
                grid[row][column] = 0;
              }
            }
          }
          return false;
        }
      }
    }
    return true;
  };

  return (
    <PageContainer>
      <GameTable>
        <GameTableBody>
          {grid.map((row, rowIndex) => (
            <GameTableRow key={rowIndex}>
              {row.map((column, columnIndex) => (
                <GameTableData key={columnIndex}>
                  <CellInput
                    type='text'
                    maxLength='1'
                    value={grid[rowIndex][columnIndex] || ''}
                    onChange={(e) => handleChange(e, rowIndex, columnIndex)}
                    onKeyPress={handleKeyPress}
                  />
                </GameTableData>
              ))}
            </GameTableRow>
          ))}
        </GameTableBody>
      </GameTable>
      <SolveButton onClick={solve}>Solve</SolveButton>
    </PageContainer>
  );
};

export default PlayGround;

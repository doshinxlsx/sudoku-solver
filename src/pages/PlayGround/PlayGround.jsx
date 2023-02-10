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

const emptyGrid = () => {
  let grid = [];
  for (let i = 0; i < 9; i++) {
    let row = [];
    for (let j = 0; j < 9; j++) {
      row.push(0);
    }
    grid.push(row);
  }
  return grid;
};

const PlayGround = () => {
  const [grid, setGrid] = useState(emptyGrid());
  const [loading, setLoading] = useState(false);

  const handleChange = (event, rowIndex, columnIndex) => {
    const number = parseInt(event.target.value, 10);

    if (number >= 1 && number <= 9 && isValid(grid, rowIndex, columnIndex, number)) {
      const updatedGrid = [...grid];
      updatedGrid[rowIndex][columnIndex] = number;
      setGrid(updatedGrid);
    }
  };

  const handleKeyPress = (event) => {
    const charCode = event.charCode || event.which;

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  };

  const solve = () => {
    setLoading(true);
    const solvedGrid = [...grid];
    const isSolved = solveSudoku(solvedGrid);

    const timer = setTimeout(() => {
      if (isSolved) {
        setGrid(solvedGrid);
        setLoading(false);
        alert('Sudoku successfully solved!');
      } else {
        alert('Invalid or unsolvable grid');
      }
      clearTimeout(timer);
    }, 2500);
  };

  const solveSudoku = (grid) => {
    for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
      for (let columnIndex = 0; columnIndex < 9; columnIndex++) {
        if (grid[rowIndex][columnIndex] === 0) {
          for (let number = 1; number <= 9; number++) {
            if (isValid(grid, rowIndex, columnIndex, number)) {
              grid[rowIndex][columnIndex] = number;
              if (solveSudoku(grid)) {
                return true;
              } else {
                grid[rowIndex][columnIndex] = 0;
              }
            }
          }
          return false;
        }
      }
    }
    return true;
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
                    columnIndex={columnIndex}
                    rowIndex={rowIndex}
                  />
                </GameTableData>
              ))}
            </GameTableRow>
          ))}
        </GameTableBody>
      </GameTable>
      <SolveButton onClick={solve}>{loading ? <Spinner /> : 'Solve'}</SolveButton>
    </PageContainer>
  );
};

export default PlayGround;

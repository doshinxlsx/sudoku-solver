import { useEffect, useState } from 'react';

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

const usePlayGround = () => {
  const [grid, setGrid] = useState(emptyGrid());
  const [loading, setLoading] = useState(false);
  const [userDefined, setUserDefined] = useState([]);

  useEffect(() => {
    const storedGrid = JSON.parse(localStorage.getItem('grid')) || [];
    const storedUserDefined = JSON.parse(localStorage.getItem('userDefined')) || [];

    if (storedGrid.length > 0 && storedUserDefined.length > 0) {
      setGrid(storedGrid);
      setUserDefined(storedUserDefined);
    }
  }, []);

  useEffect(() => {
    console.log('Grid saved');
    localStorage.setItem('grid', JSON.stringify(grid));
    localStorage.setItem('userDefined', JSON.stringify(userDefined));
  }, [grid, userDefined]);

  const handleChange = (event, rowIndex, columnIndex) => {
    const number = parseInt(event.target.value, 10);

    if (number >= 1 && number <= 9 && isValid(grid, rowIndex, columnIndex, number)) {
      const updatedGrid = [...grid];
      updatedGrid[rowIndex][columnIndex] = number;
      setGrid(updatedGrid);

      const index = rowIndex * 9 + columnIndex;

      if (!userDefined.includes(index)) {
        setUserDefined([...userDefined, index]);
      }
    }
  };

  const handleKeyPress = (event) => {
    const charCode = event.charCode || event.which;

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  };

  const resetGrid = () => {
    setGrid(emptyGrid());
    setUserDefined([]);
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
        setLoading(false);
        alert('Invalid or unsolvable grid');
      }
      clearTimeout(timer);
    }, 100);
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

  return {
    grid,
    loading,
    userDefined,
    handleChange,
    handleKeyPress,
    resetGrid,
    solve,
    solveSudoku,
    isValid,
    isSolvable,
  };
};

export default usePlayGround;

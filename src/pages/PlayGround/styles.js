import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GameTitle = styled.h2`
  margin: 15px;
  color: #ffefdf;
`;

export const GameTable = styled.table`
  border-collapse: collapse;
  border: none;
  margin: 0 0 15px 0;
`;

export const GameTableBody = styled.tbody``;

export const GameTableRow = styled.tr``;

export const GameTableData = styled.td`
  padding: 0;
`;

export const CellInput = styled.input`
  width: 50px;
  height: 50px;
  font-size: 20px;
  text-align: center;
  border: 1px solid rgba(156, 159, 217, 0.25);
  background-color: ${(props) => (props.isUserDefined ? '#40e1ff' : 'white')};
  color: ${(props) => (props.isUserDefined ? 'white' : 'black')};
  font-weight: ${(props) => (props.isUserDefined ? '600' : '500')};
  ${(props) => (props.columnIndex + 1) % 3 === 0 && `margin-right: 3px;`};
  ${(props) => (props.rowIndex + 1) % 3 === 0 && `margin-bottom: 3px;`};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 100%;
  transition: width 0.2s;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 300px;
  }
`;

export const SolveButton = styled.button`
  border: 1px solid #9df9ef;
  background: #9df9ef;
  width: 100%;
  height: 35px;
  border-radius: 6px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }

  @media screen and (min-width: 768px) {
    width: 100px;
  }
`;

export const ResetButton = styled.button`
  border: 1px solid #ffa8b6;
  background: #ffa8b6;
  width: 100%;
  height: 35px;
  border-radius: 6px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }

  @media screen and (min-width: 768px) {
    width: 100px;
  }
`;

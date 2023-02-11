import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GameTable = styled.table`
  border-collapse: collapse;
  border: 3px solid #51e2f5;
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
  border: 1px solid black;
  background-color: ${(props) => (props.isUserDefined ? '#9df9ef' : 'white')};
  ${(props) => (props.columnIndex + 1) % 3 === 0 && `border-right: 3px solid black;`};
  ${(props) => (props.rowIndex + 1) % 3 === 0 && `border-bottom: 3px solid black;`};
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

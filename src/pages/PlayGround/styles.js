import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GameTable = styled.table`
  border-collapse: collapse;
  border: 3px solid #51e2f5;
  background-color: #51e2f5;
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
  padding: 0px;
  border: 1px solid black;
`;

export const SolveButton = styled.button``;

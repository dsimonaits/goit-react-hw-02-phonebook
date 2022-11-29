import styled from 'styled-components';

export const ListItem = styled.li`
  width: 400px;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: black;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const Btn = styled.button`
  cursor: pointer;
  padding: 5px;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
  background-color: black;
  &:hover {
    color: black;
    background-color: white;
  }
`;

export const Number = styled.span`
  margin-left: 10px;
`;
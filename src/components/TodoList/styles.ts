import styled from 'styled-components'

export const ListWrapper = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
`

export const List = styled.ul`
  width: 100%;
  max-width: 1000px;
  border: 1px solid black;
  border-radius: 8px;
  list-style: none;
  padding: 0;
`

export const ListItem = styled.li`
  border-bottom: 1px solid black;
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 50px;
  
  &:hover {
    background-color: lightgray;
  }
  
  &:last-child {
    border-bottom: none;
  }
`

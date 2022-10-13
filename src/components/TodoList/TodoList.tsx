import React from 'react'
import { List, ListItem, ListWrapper } from './styles'
import { removeTodo } from '../../store'
import { TodoListToolbar } from '../TodoListToolbar'
import { useAppDispatch, useAppSelector } from '../../hooks'

export const TodoList = () => {
  const todos = useAppSelector((state) => state.todos.todos)
  const dispatch = useAppDispatch()

  return (
    <ListWrapper>
      <h1>Todo List</h1>
      {todos.length > 0 ? (
        <List>
          {todos.map((todo) => (
            <ListItem key={todo} onClick={() => {dispatch(removeTodo(todo))}}>
              {todo}
            </ListItem>
          ))}
        </List>
      ) : (
        <h2>No Todos</h2>
      )}
      <TodoListToolbar />
    </ListWrapper>
  )
}

import React, { FormEvent, useRef } from 'react'
import { addTodo } from '../../store'
import { useAppDispatch, useAppSelector } from '../../hooks'

export const TodoListToolbar = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const todos = useAppSelector((state) => state.todos.todos)
  const dispatch = useAppDispatch()

  const submitTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const todo = inputRef.current?.value ?? ''
    if (inputRef.current && todo && !todos.includes(todo)) {
      dispatch(addTodo(todo))
      inputRef.current.value = ''
    }
  }

  return (
    <form onSubmit={submitTodo}>
      <input type="text" ref={inputRef} />
    </form>
  )
}

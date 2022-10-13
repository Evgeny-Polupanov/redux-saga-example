export const getTodosFromLS = (): string[] => {
  const todosStr = localStorage.getItem('todos')
  return todosStr ? JSON.parse(todosStr) : []
}

export const addTodoToLS = (todo: string) => {
  const todosStr = localStorage.getItem('todos')
  const todos = todosStr ? JSON.parse(todosStr) : []
  todos.unshift(todo)
  localStorage.setItem('todos', JSON.stringify(todos))
}

export const removeTodoFromLS = (todo: string) => {
  const todosStr = localStorage.getItem('todos')
  const todos: string[] = todosStr ? JSON.parse(todosStr) : []
  localStorage.setItem('todos', JSON.stringify(todos.filter((existingTodo) => existingTodo !== todo)))
}

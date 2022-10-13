import { createSlice, configureStore } from '@reduxjs/toolkit'
import { getTodosFromLS } from './utils'
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from './sagas'

const sagaMiddleware = createSagaMiddleware()

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: getTodosFromLS(),
  },
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos.unshift(payload)
    },
    removeTodo: (state, { payload }) => {
      state.todos.splice(state.todos.findIndex((todo) => todo === payload), 1)
    },
  },
})

export const { addTodo, removeTodo } = todosSlice.actions

export const store = configureStore({
  reducer: { todos: todosSlice.reducer },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware)
  },
})
sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

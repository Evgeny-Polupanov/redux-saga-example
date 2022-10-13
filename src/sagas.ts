import { all, takeEvery, call } from 'redux-saga/effects'
import { addTodo, removeTodo } from './store'
import { addTodoToLS, removeTodoFromLS } from './utils'

function* addTodoWorker(action: { payload: string }) {
  yield call(addTodoToLS, action.payload)
}

function* removeTodoWorker(action: { payload: string }) {
  yield call(removeTodoFromLS, action.payload)
}

function* todosWatcher() {
  yield takeEvery(addTodo.toString(), addTodoWorker)
  yield takeEvery(removeTodo.toString(), removeTodoWorker)
}

export function* rootSaga() {
  yield all([
    todosWatcher(),
  ])
}

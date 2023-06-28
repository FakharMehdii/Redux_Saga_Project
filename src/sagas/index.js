import axios from "axios";
import { takeEvery, call, all, takeLatest, put } from 'redux-saga/effects';

function* createTodoSaga(action) {
  try {
    let response = yield call(axios.post, 'https://crudcrud.com/api/708f509e6aee4ecb944e7e2c895118cd/tasks', {name:action.payload}, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    yield call(updateStore)
  } catch (error) {
    console.error(error);
  }
}

function* updateStore () {
    try{
        const response = yield call(axios.get, 'https://crudcrud.com/api/708f509e6aee4ecb944e7e2c895118cd/tasks')
    yield put({type: 'ADD_TODO_STORE', payload:response.data})
    } catch (error) {
        console.error(error);
    }
}

function * removeTodoSaga(action)
{
    try{
        const endpoint =  'https://crudcrud.com/api/708f509e6aee4ecb944e7e2c895118cd/tasks/';
        const response = yield call (axios.delete,  endpoint.concat(action.payload._id));
        yield call(updateStore)
    } catch (error) {
        console.error(error);
        }
}

function * editTodoSaga(action) 
{
    try{
        const endpoint =  'https://crudcrud.com/api/708f509e6aee4ecb944e7e2c895118cd/tasks/';
        const response = yield call (axios.put,  endpoint.concat(action.payload._id), {name:action.payload.name});
        yield call(updateStore)
    } catch (error) {
        console.error(error);
        }

}

function * startAppSaga () {
    try {
        yield call(updateStore)
    } catch(error) {
        console.error(error);
    }
}

function* watchStartApp() {
    yield takeEvery('START_APP', startAppSaga);
  }

function* watchAddTodo() {
  yield takeEvery('ADD_TODO', createTodoSaga);
}

function* watchRemoveTodo() {
    yield takeEvery('REMOVE_TODO', removeTodoSaga) 
}

function* watchEditTodo() {
    yield takeEvery('EDIT_TODO', editTodoSaga) 
}

export default function* rootSaga() {
  yield all([watchAddTodo(), watchRemoveTodo(), watchEditTodo(), watchStartApp()]);
}

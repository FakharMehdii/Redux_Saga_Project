import axios from "axios";
import { takeEvery, call, all, takeLatest, put } from 'redux-saga/effects';

function* createTodoSaga(action) {
  try {
    let response = yield call(axios.post, 'https://crudcrud.com/api/d830b33c752f4f52b7520389123dbe79/tasks', {name:action.payload}, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response)
    yield call(updateStore)
  } catch (error) {
    console.error(error);
  }
}

function* updateStore () {
    try{
        const response = yield call(axios.get, 'https://crudcrud.com/api/d830b33c752f4f52b7520389123dbe79/tasks')
    yield put({type: 'ADD_TODO_STORE', payload:response.data})
    console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

function * removeTodoSaga(action)
{
    try{
        const endpoint =  'https://crudcrud.com/api/d830b33c752f4f52b7520389123dbe79/tasks/';
        const response = yield call (axios.delete,  endpoint.concat(action.payload._id));
        console.log(response.data);
        yield call(updateStore)
    } catch (error) {
        console.error(error);
        }
}

function * editTodoSaga(action) 
{
    try{
        console.log("in the edit saga", action.payload.name);
        const endpoint =  'https://crudcrud.com/api/d830b33c752f4f52b7520389123dbe79/tasks/';
        const response = yield call (axios.put,  endpoint.concat(action.payload._id), {name:action.payload.name});
        console.log(response.data);
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

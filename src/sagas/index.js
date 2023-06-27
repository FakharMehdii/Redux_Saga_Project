import axios from "axios";
import {takeEvery, call, all } from 'redux-saga/effects'


function *createTodoSaga(action) {
    try{
        const response = yield call(axios.post, 'https://crudcrud.com/api/bd1d8aff47e543d3b8547d571daa66f1', action.payload);
        console.log(response.data)
    } catch (error) {
        console.error(error);
    }
}

function* watchAddTodo() {

    yield takeEvery('ADD_TODO', createTodoSaga);
}

export default function * rootSaga () {
    yield all (
        [
            watchAddTodo(),
    ]
    );

}
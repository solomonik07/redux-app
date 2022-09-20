import {takeEvery, put, call, all} from 'redux-saga/effects'
import {
  LOAD_DATA,
  CREATE_DATA,
  REMOVE_DATA,
  putData,
  deleteData,
  catchError,
  addData
} from "./actions";
import { getPosts, removePost, createPost } from "../api/api";

function* workerLoadData() {
  try {
    const data = yield call(getPosts)
    yield put(putData(data))
  }
  catch(error) {
    yield put(catchError(error))
  }
}
export function* watchLoadData() {
  yield takeEvery(LOAD_DATA, workerLoadData)
}

function* workerAddData(action) {
  try {
    const { payload } = action;
    const data = yield call(createPost, payload)
    yield put(addData(data))
  }
  catch(error) {
    yield put(catchError(error))
  }
}
export function* watchAddData() {
  yield takeEvery(CREATE_DATA, workerAddData)
}

function* workerRemoveData(action) {
  try {
    const { payload } = action;
    yield call(removePost, payload.id)
    yield put(deleteData(payload))
  }
  catch(error) {
    yield put(catchError(error))
  }
}
export function* watchRemoveData() {
  yield takeEvery(REMOVE_DATA, workerRemoveData)
}

export default function* rootSaga() {
  yield all([
    watchLoadData(),
    watchAddData(),
    watchRemoveData()
  ])
}
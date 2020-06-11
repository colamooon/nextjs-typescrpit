import { put, takeLatest } from 'redux-saga/effects';
import { actionTypes, loadSampleSuccess, loadSampleError } from './actions';

function* sampleLoadSaga() {
  try {
    const response = 'call sample';
    yield put(loadSampleSuccess(response));
  } catch (err) {
    yield put(loadSampleError(err));
  }
}

export default [takeLatest(actionTypes.SAMPLE_LOAD, sampleLoadSaga)];

import { all } from 'redux-saga/effects';
import sampleSaga from './sample/saga';

const staticSaga: any = [];
const mergedSagas = staticSaga.concat(sampleSaga);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function* rootSaga() {
  yield all(mergedSagas);
}

export default rootSaga;

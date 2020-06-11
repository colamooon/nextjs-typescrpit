import { combineReducers } from 'redux';

import sampleState from './sample/reducer';

const rootReducer = combineReducers({
  sampleState,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

import { AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { actionTypes } from './actions';

export interface SampleState {
  sample: string;
  error: boolean;
  loading: boolean;
}

const sampleInitialState: SampleState = {
  sample: '',
  error: false,
  loading: false,
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const sampleReducer = (state = sampleInitialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case actionTypes.SAMPLE_LOAD_SUCCESS:
      return { ...state, ...{ sample: action.data } };
    default:
      return state;
  }
};

export default sampleReducer;

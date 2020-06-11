export const SAMPLE_LOAD = 'SAMPLE_LOAD';

export const actionTypes = {
  SAMPLE_LOAD: SAMPLE_LOAD,
  SAMPLE_LOAD_SUCCESS: `${SAMPLE_LOAD}_SUCCESS`,
  SAMPLE_LOAD_ERROR: `${SAMPLE_LOAD}_ERROR`,
};

export const loadSample = () => {
  return {
    type: actionTypes.SAMPLE_LOAD,
  };
};

export const loadSampleSuccess = (data: string) => {
  return {
    type: actionTypes.SAMPLE_LOAD_SUCCESS,
    data,
  };
};

export const loadSampleError = (error: string) => {
  return {
    type: actionTypes.SAMPLE_LOAD_ERROR,
    error,
  };
};

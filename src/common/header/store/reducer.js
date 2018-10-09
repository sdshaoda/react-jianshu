import * as types from './actionTypes';

const defaultState = {
  inputFocused: false,
};

const reducer = (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case types['INPUT_FOCUS']:
      newState.inputFocused = true;
      break;
    case types['INPUT_BLUR']:
      newState.inputFocused = false;
      break;
    default:
      break;
  }
  return newState;
}

export default reducer;

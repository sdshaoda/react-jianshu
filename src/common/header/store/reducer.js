import * as types from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  inputFocused: false,
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types['INPUT_FOCUS']:
      state = state.set('inputFocused', true);
      break;
    case types['INPUT_BLUR']:
      state = state.set('inputFocused', false);
      break;
    default:
      break;
  }
  return state;
}

export default reducer;

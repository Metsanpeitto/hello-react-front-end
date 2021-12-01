import RECEIVE_GREETINGS from '../constants/action-types';

const initialState = { greetings: [] };

const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_GREETINGS: {
      return {
        greetings: action.greetings,
      };
    }
    default:
      return state;
  }
};

export default greetingsReducer;

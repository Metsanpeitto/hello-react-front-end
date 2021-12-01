import api from '../../api/api';

import
RECEIVE_GREETINGS
  from '../constants/action-types';

export const receiveGreetings = (greetings) => ({
  type: RECEIVE_GREETINGS,
  greetings,
});

export const getGreetings = () => (dispatch) => {
  api.getGreetings().then((greetings) => {
    dispatch(receiveGreetings(greetings));
    return greetings;
  });
};

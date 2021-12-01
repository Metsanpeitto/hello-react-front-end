import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from '../redux/api/api';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Greetings = () => {
  const dispatch = useDispatch();
  const greetings = useSelector((state) => state.greetingsReducer.greetings);

  const index = getRandomInt(5);
  let message = 'Not fetched yet';
  if (greetings) {
    message = greetings[index];
  }
  useEffect(() => {
    dispatch(getGreetings());
  }, []);

  return <h1>{message}</h1>;
};

export default Greetings;

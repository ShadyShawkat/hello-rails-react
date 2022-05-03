import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessages } from './../redux/greetings';

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessages());
  }, []);

  const greeting = useSelector((state) => state.greetings);

  return (
    <div>
      <h1>Greeting</h1>
      <div>
        Message:
        {' '}
        { greeting.message }
      </div>
    </div>
  );
};

export default Greeting;
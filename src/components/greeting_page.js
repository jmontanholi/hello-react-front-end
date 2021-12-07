import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getGreeting from '../features/greeting/greeting_slice';

const GreetingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getGreeting(dispatch);
  }, [dispatch]);

  const { greeting, loading } = useSelector((state) => state);
  return (
    <div>
      { loading && 
        <div>
          <h1>Loading, please wait</h1>
        </div>
      }
      { !loading &&
        <div>
          <h1>{greeting}</h1>
        </div>
      }
    </div>
  );
}

export default GreetingPage;
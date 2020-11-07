import React, { useCallback } from 'react';
import './App.css';
import { userActions, userSelector } from './store/userSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const fixAgeCallback = useCallback(() => dispatch(userActions.setAge(16)), []);
  const getBackground = useCallback(() => dispatch(userActions.getBackground(user.id)), []);
  const reset = useCallback(()=>dispatch(userActions.reset()), []);
  return (
    <div className="App">
      <header className="App-header">
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Age: {user.age}</p>
        <p>Gender: {user.gender}</p>
        <div>Other Info:</div>
        <p>University: {user.otherInfo.university}</p>
        <p>Hight School: {user.otherInfo.highSchool}</p>
        <p>Primary Scheool: {user.otherInfo.primarySchool}</p>
        <div>
          <button onClick={fixAgeCallback}>Fix Age</button> <br/>
          <button onClick={getBackground}>Get education background</button> <br/>
          <button onClick={reset}>Reset</button>
        </div>
      </header>
      
    </div>
  );
}

export default App;

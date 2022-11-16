import React, { useEffect } from 'react';
import './App.sass';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreaters';

function App() {
  const dispatch = useAppDispatch()
  const {users, isLoading, error} = useAppSelector(state => state.userReducer);

  useEffect(() => {
    dispatch(fetchUsers())
  },[])

  return (
    <div className="App">
    {isLoading && <h1>Loading . . .</h1>}
    {error && <h1>{error}</h1>}
    {JSON.stringify(users, null, 2)}
    </div>
  );
}

export default App;
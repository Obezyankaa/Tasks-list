import React, { useEffect } from 'react';
import './App.sass';
import PostContainer from './components/PostContainer';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreaters';

function App() {
  // const dispatch = useAppDispatch()
  // const {users, isLoading, error} = useAppSelector(state => state.userReducer);

  // useEffect(() => {
  //   dispatch(fetchUsers())
  // },[])

  return (
    <div className="App">
      <h1>Redux-Toolkit</h1>
      <PostContainer/>
    </div>
  );
}

export default App;

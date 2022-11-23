import React, { useEffect } from 'react';
import './App.sass';
import PostContainer from './components/PostContainer';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreaters';

function App() {
  return (
    <div className="App">
      <h1>Ваши задачи !</h1>
      <PostContainer/>
    </div>
  );
}

export default App;

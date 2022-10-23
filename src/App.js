import logo from './logo.svg';
import './App.css';
import UserReducer from './Hooks/useReducer';
import MemoHooks from './MemoHooks';
import User from './Routes/User';
import { Route, Routes } from 'react-router-dom';
import Blogs from './Routes/Blogs';



function App() {
  return (
    <div >
      <UserReducer></UserReducer>
      <MemoHooks></MemoHooks>





    </div>
  );
}

export default App;

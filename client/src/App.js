import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './components/Login/Login';
import Chat from './components/Chat/Chat';
import './App.css'

const App = () => {
 return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/chat' element={<Chat/>}/>
      </Routes>
    </Router>
  </div>
)};

export default App;
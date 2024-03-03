import React from 'react';
import './App.css';

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';

import {RoomProvider} from './Context'

function App() {
  return (
    <>
    <RoomProvider>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" Component={Home} />
          <Route exact path="/rooms/" Component={Rooms} />
          <Route path="/rooms/:slug" Component={SingleRoom} />
          <Route path='*' Component={Error} />
        </Routes>
      </Router>
      </RoomProvider>
    </>
  );
}

export default App;

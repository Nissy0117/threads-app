import './App.css';
import './css/Header.css';
import React from 'react'
import { Component } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import NewThreadBtn from './components/NewThreadBtn';
import Threads from './components/Threads';
import Thread from './components/Thread';
import NewThread from './components/NewThread';
import NotMatch from './components/NotMatch';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact path="/"
          element={<Home />}
        />
        <Route
          path="/newthread"
          element={<NewThread />}
        />
        <Route
          path="/threads"
          element={<Threads />}
        />
        <Route
          path="/threads/:threadid/posts"
          component={Thread}
          element={<Thread />}
        />
        <Route
          path="*"
          element={<NotMatch />}
        />
      </Routes>
    </div>
  );
}

export default App;

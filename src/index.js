import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './HomeScreen';
import MessagesScreen from './MessagesScreen';
import JournalScreen from './JournalScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path={"/"} Component={Home} />
      <Route path={"messages"} Component={MessagesScreen}/>
      <Route path={"notes"} Component={JournalScreen}/>

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


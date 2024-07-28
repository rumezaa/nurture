import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './HomeScreen';
import MessagesScreen from './MessagesScreen';
import JournalScreen from './JournalScreen';
import MessageScreen from './MessageScreen';
import FamilyNotesScreen from './FamilyNotesScreen';
import NotesScreen from './NotesScreen';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path={"/"} Component={Home} />
      <Route path={"messages"} Component={MessagesScreen}/>
      <Route path={"notes"} Component={JournalScreen}/>
      <Route path={"message"} Component={MessageScreen} />
      <Route path={"family"} Component={FamilyNotesScreen} />
      <Route path={"personal"} Component={NotesScreen} />



    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

import Sidebar from './Components/Sidebar';
import Dashboard from './Pages/Dashboard';
import Chat from './Pages/Chat'
import Ecommerce from './Pages/Ecommerce'
import Calendar from './Pages/Calendar'
import Email from './Pages/Email'
import Tasks from './Pages/Tasks'
import Tickets from './Pages/Tickets'
import Conatacts from './Pages/Conatacts'
import Extra from './Pages/Extra'
import Base from './Pages/Base'
import React from 'react';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="row g-0">
          <div className="col-12 col-lg-2 mainRight"><Sidebar /></div>
          <div  className="col-12 col-lg-10 mainLeft">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Calendar" element={<Calendar />} />
              <Route path="/Chat" element={<Chat />} />
              <Route path="/Ecommerce" element={<Ecommerce />} />
              <Route path="/Email" element={<Email />} />
              <Route path="/Tasks" element={<Tasks />} />
              <Route path="/Tickets" element={<Tickets />} />
              <Route path="/Conatacts" element={<Conatacts />} />
              <Route path="/Extra" element={<Extra />} />
              <Route path="/Base" element={<Base />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

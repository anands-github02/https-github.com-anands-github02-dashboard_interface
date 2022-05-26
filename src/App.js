import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from './pages/Chat';
import Company from './pages/Company';
import Dashboard from './pages/Dashboard';
import Knowledge from './pages/Knowledge';
import Members from './pages/Members';
import MyProfile from './pages/MyProfile';
import Settings from './pages/Settings';
import Teams from './pages/Teams';
import Vault from './pages/Vault';

function App() {
  return ( 
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Knowledge />} />
          <Route path="chat" element={<Chat />} />
          <Route path="company" element={<Company />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="members" element={<Members />} />
          <Route path="profile" element={<MyProfile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="teams" element={<Teams />} />
          <Route path="vault" element={<Vault />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

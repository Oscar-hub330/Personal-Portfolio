import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EditProfile from './pages/EditProfile';
import PublicProfile from './pages/PublicProfile';

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/edit" element={<EditProfile />} />
      <Route path="/u/:username" element={<PublicProfile />} />
    </Routes>
  );
}

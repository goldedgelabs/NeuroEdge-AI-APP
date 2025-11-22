import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Chats from '../pages/Chats';
import ChatView from '../pages/ChatView';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';
import Tools from '../pages/Tools';
import Agents from '../pages/Agents';
import Premium from '../pages/Premium';
import Help from '../pages/Help';
import Support from '../pages/Support';
import FileManager from '../pages/FileManager';
import Notifications from '../pages/Notifications';
import FounderDashboard from '../pages/FounderDashboard';
import NotFound from '../pages/NotFound';

export default function AppRoutes(){
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/chats' element={<Chats/>} />
      <Route path='/chat/:id' element={<ChatView/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/settings' element={<Settings/>} />
      <Route path='/tools' element={<Tools/>} />
      <Route path='/agents' element={<Agents/>} />
      <Route path='/premium' element={<Premium/>} />
      <Route path='/help' element={<Help/>} />
      <Route path='/support' element={<Support/>} />
      <Route path='/files' element={<FileManager/>} />
      <Route path='/notifications' element={<Notifications/>} />
      <Route path='/founder' element={<FounderDashboard/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  );
}

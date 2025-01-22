import { Routes, Route } from 'react-router';
import { Login } from '../views/login';
import Signup from '../views/Signup';
import Profile from '../views/Profile';
import Project from '../views/Project';
import Home from '../views/home';
import Dashboard   from '../views/dashboard';
import Information from '../views/information';
import Inventory from '../views/inventory';
import Crop from '../views/Crop'

export const AppRouter = () => {
 return (
  <Routes>
   <Route path='/' element={<Login />} />
   <Route path='/signup' element={<Signup />} />
   <Route path='/profile' element={<Profile />} />
   <Route path='/project' element={<Project />} />
   <Route path='/home' element={<Home />} />
   <Route path='/dashboard' element={<Dashboard />} />
   <Route path='/information' element={<Information />} />
   <Route path='/Inventory' element={<Inventory />} />
   <Route path='/Crop' element={<Crop />} />
  </Routes>
 );
};



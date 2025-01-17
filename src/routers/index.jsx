import { Routes, Route } from 'react-router';
import { Login } from '../views/login';
import Signup from '../views/Signup';
import Profile from '../views/Profile';
import Project from '../views/Project';
import Home from '../views/home';

export const AppRouter = () => {
 return (
  <Routes>
   <Route path='/' element={<Login />} />
   <Route path='/signup' element={<Signup />} />
   <Route path='/profile' element={<Profile />} />
   <Route path='/project' element={<Project />} />
   <Route path='/home' element={<Home />} />
  </Routes>
 );
};

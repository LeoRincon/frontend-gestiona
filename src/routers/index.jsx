import { Routes, Route } from 'react-router';
import { Login } from '../views/login';
import Signup from '../views/Signup';
import Profile from '../views/Profile';
import Project from '../views/Project';
import Home from '../views/home';
import Dashboard from '../views/dashboard';
import Information from '../views/information';
import Supply from '../views/supply';
import Crop from '../views/Crop';
import Season from '../views/season';
import { ValidateUserRoute } from './ValidateUserRoute';

export const AppRouter = () => {
 return (
  <Routes>
   <Route path='/' element={<Login />} />
   <Route path='/login' element={<Login />} />
   <Route path='/signup' element={<Signup />} />

   <Route element={<ValidateUserRoute redirectTo={'/login'} />}>
    <Route path='/profile' element={<Profile />} />
    <Route path='/projects' element={<Project />} />
    <Route path='/home' element={<Home />} />
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/information' element={<Information />} />
    <Route path='/supply' element={<Supply />} />
    <Route path='/Crop' element={<Crop />} />
    <Route path='/season' element={<Season />} />
   </Route>

   <Route path='/*' element={<Login />} />
  </Routes>
 );
};

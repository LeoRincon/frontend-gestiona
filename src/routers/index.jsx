import { Routes, Route } from 'react-router';
import { Login } from '../views/login';
import Signup from '../views/Signup';
import Profile from '../views/Profile';

export const AppRouter = () => {
 return (
  <Routes>
   <Route path='/' element={<Login />} />
   <Route path='/signup' element={<Signup />} />
   <Route path='/profile' element={<Profile />} />
  </Routes>
 );
};

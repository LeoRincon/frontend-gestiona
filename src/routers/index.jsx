import { Routes, Route } from 'react-router';
import { Login } from '../views/login';
import Signup from '../views/Signup';

export const AppRouter = () => {
 return (
  <Routes>
   <Route path='/' element={<Login />} />
   <Route path='/signup' element={<Signup />} />
  </Routes>
 );
};

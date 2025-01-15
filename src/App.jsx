import { Routes, Route } from 'react-router';

import { Login } from './views/login';
import Signup from './views/Signup';

import './App.css';

function App() {
 return (
  <Routes>
   <Route path='/' element={<Login />} />
   <Route path='/signup' element={<Signup />} />
  </Routes>
 );
}

export default App;

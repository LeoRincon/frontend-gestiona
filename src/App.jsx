import { Routes, Route} from "react-router";
import { Login } from './views/login';
import Dashboard   from './views/dashboard';
import Information from './views/information';
import Home from "./views/home";
import Signup from "./views/signup";

import './App.css';

function App() {
 return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/information" element={<Information />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
    </Routes>);
}

export default App;
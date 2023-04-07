import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {

  const[isLogin, setIslogin] = useState(false);
  return(
    <div className="w-screen h-screen bg-richblack-800 flex flex-col">
      <Navbar isLogin={isLogin} setIslogin={setIslogin}/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login setIslogin={setIslogin}/>} />
        <Route path="/signup" element={<Signup setIslogin={setIslogin}/>} />
        <Route path="/dashboard" element={<PrivateRoute isLogin={isLogin}>
          {<Dashboard/>}
        </PrivateRoute>} />
      </Routes>
    </div>
  );
}

export default App;

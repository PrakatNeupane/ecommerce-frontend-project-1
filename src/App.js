import React from 'react';
import './App.css';
import RegistrationPage from './pages/register-login/RegistrationPage';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from './pages/register-login/LoginPage';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />}></Route>
          <Route path='/register' element={<RegistrationPage />}></Route>
          <Route path='*' element={<h1>404 page not found</h1>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

import './App.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import LoginForm from './pages/loginForm/LoginForm';


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/login" element={<LoginForm/>} />
      <Route path="/home" element={<Home />} />
    </Routes>
    </>
  )
}

export default App

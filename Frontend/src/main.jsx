import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Clases from './routes/Clases.jsx';
import ClassDetail from './routes/ClassDetail.jsx';
import Login from './routes/Login.jsx';
import Instructores from './routes/Instructores';
import Registro from './routes/Registro.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/clases" element={<Clases />} />
        <Route path="/instructores" element={<Instructores />} />
        <Route path="/clase/:nombre" element={<ClassDetail />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

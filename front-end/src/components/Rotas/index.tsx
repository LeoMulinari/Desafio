import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PersonList from '../../PersonList';
import Cadastro from '../cadastro/cadastro';
import { Login } from '../Login/login';
import Homepage from '../pages/homepage';
import Noticias from '../pages/noticias';
import Perfil from '../pages/perfil';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
        <Route path="/homepage" element={<Homepage />}></Route>
        <Route path="/user" element={<Perfil />}></Route>
        <Route path="/news" element={<Noticias />}></Route>
        <Route path="/teste" element={<PersonList />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;

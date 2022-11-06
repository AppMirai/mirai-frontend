import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './Pages/Admin/SignIn';
import TableProducts from './Pages/Product/TableProducts';
import FormProducts from './Pages/Product/FormProducts';
import EditProducts from './Pages/Product/EditProducts';
import TableUsers from './Pages/User/TableUsers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<SignIn />} />
        </Route>
        <Route path='/tableusers'>
          <Route index element={<TableUsers />} />
        </Route>
        <Route path='/tableproducts'>
          <Route index element={<TableProducts />} />
        </Route>
        <Route path='/formproducts'>
          <Route index element={<FormProducts />} />
        </Route>
        <Route path='/editproducts'>
          <Route index element={<EditProducts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

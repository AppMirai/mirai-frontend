import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import FormAddProducts from './Pages/Products/FormAddProducts';
import TableProducts from './Pages/Products/TableProducts';
import TableUsers from './Pages/User/TableUsers';
import LoginAdmin from './Pages/Admin/LoginAdmin';
import RegisAdmin from './Pages/Admin/RegisAdmin';
import ProductList from './Components/ProductList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<TableProducts />} />
        <Route exact path="/products" element={<ProductList />} />
        <Route exact path="/login" element={<LoginAdmin />} />
        <Route exact path="/regis" element={<RegisAdmin />} />
        <Route exact path="/form" element={<FormAddProducts />} />
        <Route exact path="/product" element={<TableProducts />} />
        <Route exact path="/user" element={<TableUsers />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

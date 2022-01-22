import React from 'react';
import 'antd/dist/antd.css';
import Sub_navbar from './components/subNavbar/Sub_navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './components/navbar/Navbar';
import Subscription from './components/Subscription/Subscription';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Home from './Home';
import Sub_Footer from './components/subFooter/Sub_Footer';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      <Sub_navbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path="contact-us" element={<Contact></Contact>}></Route>
      </Routes>
      <Subscription />
      <Footer />
      <Sub_Footer />
    </>
  );
}

export default App;

import React from 'react';
import 'antd/dist/antd.css';
import Sub_navbar from './components/subNavbar/Sub_navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';

function App() {
  return (
    <>
      <Sub_navbar />
      <Navbar />
      <Banner />
    </>
  );
}

export default App;

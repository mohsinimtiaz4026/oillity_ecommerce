import React from 'react';
import 'antd/dist/antd.css';
import Sub_navbar from './components/subNavbar/Sub_navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import SaleOption from './components/saleOptions/SaleOption';
import Exclusive_Products from './components/exclusiveProducts/Exclusive_Products';
import Marketing_Banner from './components/marketingBanner/Marketing_Banner';
import FeaturedProducts from './components/featuredProducts/Featured_Products';
import Testimonails from './components/Testimonails/Testimonails';
import Service from './components/Services/Service';

function App() {
  return (
    <>
      <Sub_navbar />
      <Navbar />
      <Banner />
      <SaleOption />
      <Exclusive_Products />
      <Marketing_Banner />
      <FeaturedProducts />
      <Testimonails />
      <Service />
    </>
  );
}

export default App;

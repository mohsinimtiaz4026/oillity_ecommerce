import React from 'react';
import Banner from './components/banner/Banner';
import SaleOption from './components/saleOptions/SaleOption';
import Exclusive_Products from './components/exclusiveProducts/Exclusive_Products';
import Marketing_Banner from './components/marketingBanner/Marketing_Banner';
import FeaturedProducts from './components/featuredProducts/Featured_Products';
import Testimonails from './components/Testimonails/Testimonails';
import Service from './components/Services/Service';

const Home = () => {
    return (
        <>
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

export default Home;

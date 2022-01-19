import React from 'react';
import ProductCard from './Card/Card';
import Pic1 from '../../assets/images/1.jpg';
import Pic2 from '../../assets/images/2.jpg';
import Pic3 from '../../assets/images/3.jpg';
import Pic7 from '../../assets/images/7.jpg';
import Pic8 from '../../assets/images/8.jpg';
import Slider from "react-slick";
import './style.css';

const FeaturedProducts = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 4,
        arrows: false
    };

    return (
        <>
            <section className='featured_products'>
                <div className='container'>
                    <div className='row'>
                        <div className='col text-center'>
                            <h2 className='heading'>Featured Products</h2>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <Slider {...settings}>
                            <ProductCard
                                img={Pic1}
                                LabelNew="New"
                                LabelHot="Hot"
                                LabelSale="Sale"
                                cardTitle="Lorem ipsum fashion one"
                                price="$15.30"
                                strike="$17.00"
                                discount="10% Off"
                                value={4}
                                rating='(5)'
                            />
                            <div>
                                <ProductCard
                                    img={Pic2}
                                    LabelNew="New"
                                    LabelHot="Hot"
                                    LabelSale="Sale"
                                    cardTitle="Lorem ipsum fashion two"
                                    price="$16.02"
                                    strike="$18.00"
                                    discount="11% Off"
                                    value={3}
                                    rating='(6)'
                                />
                            </div>
                            <ProductCard
                                img={Pic3}
                                LabelNew="New"
                                LabelHot="Hot"
                                LabelSale="Sale"
                                cardTitle="Lorem ipsum fashion three"
                                price="$16.72"
                                strike="$19.00"
                                discount="12% Off"
                                value={5}
                                rating='(7)'
                            />
                            <ProductCard
                                img={Pic7}
                                LabelNew="New"
                                LabelHot="Hot"
                                LabelSale=""
                                cardTitle="Lorem ipsum fashion four"
                                price="$23.00"
                                strike=""
                                discount=""
                                value={4}
                                rating='(11)'
                            />
                            <ProductCard
                                img={Pic8}
                                LabelNew="New"
                                LabelHot="Hot"
                                LabelSale="Sale"
                                cardTitle="Lorem ipsum fashion five"
                                price="$19.92"
                                strike="$24.00"
                                discount="17% Off"
                                value={5}
                                rating='(12)'
                            />
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
}
export default FeaturedProducts;
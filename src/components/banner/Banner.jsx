import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';

const Banner = () => {


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <>
            <section className='banner'>
                <Slider {...settings}>
                    <div className='slider1'>
                        <div className='container'>
                            <div className='manage'>
                                <p>40% off  in all the products</p>
                                <h1>Women Fashion</h1>
                                <a class="button" id="button-5">
                                    <div id="translate"></div>
                                    <a href="#">Shop Now</a>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='slider2'>
                        <div className='container'>
                            <div className='manage'>
                                <p>50% off all in the products</p>
                                <h1>Man Fashion</h1>
                                <a class="button" id="button-5">
                                    <div id="translate"></div>
                                    <a href="#">Shop Now</a>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='slider3'>
                        <div className='container'>
                            <div className='manage'>
                                <p>Taking your Viewing Experience to Next Level</p>
                                <h1>Summer Sale</h1>
                                <a class="button" id="button-5">
                                    <div id="translate"></div>
                                    <a href="#">Shop Now</a>
                                </a>
                            </div>
                        </div>
                    </div>
                </Slider>
                {/* <div className='nextArrow'><i className='bi bi-chevron-right'></i></div>
                <div className='nextPre'><i className='bi bi-chevron-left'></i></div> */}
            </section>
        </>
    );
}

export default Banner;
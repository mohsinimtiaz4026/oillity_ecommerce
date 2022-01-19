import React from 'react';
import Slider from 'react-slick';
import client1 from '../../assets/images/user_img1.jpg';
import client2 from '../../assets/images/user_img2.jpg';
import client3 from '../../assets/images/user_img3.jpg';
import client4 from '../../assets/images/user_img4.jpg';
import './style.css';

const Testimonails = () => {

    const settings = {
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <>
            <section className='testimonails'>
                <div className='container'>
                    <div className='row'>
                        <Slider {...settings}>
                            <div className='manage_client'>
                                <h2>Our Client Say!</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                <div className='client_data'>
                                    <div className='profile'>
                                        <img src={client1} alt='client 1' />
                                    </div>
                                    <div className='client_info'>
                                        <h6>Sally Ramsey</h6>
                                        <p>Designer</p>
                                    </div>
                                </div>
                            </div>
                            <div className='manage_client'>
                                <h2>Our Client Say!</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                <div className='client_data'>
                                    <div className='profile'>
                                        <img src={client2} alt='client 2' />
                                    </div>
                                    <div className='client_info'>
                                        <h6>Lois Thomspon</h6>
                                        <p>Designer</p>
                                    </div>
                                </div>
                            </div>
                            <div className='manage_client'>
                                <h2>Our Client Say!</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                <div className='client_data'>
                                    <div className='profile'>
                                        <img src={client3} alt='client 3' />
                                    </div>
                                    <div className='client_info'>
                                        <h6>Florence Pittman</h6>
                                        <p>Designer</p>
                                    </div>
                                </div>
                            </div>
                            <div className='manage_client'>
                                <h2>Our Client Say!</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                <div className='client_data'>
                                    <div className='profile'>
                                        <img src={client4} alt='client 4' />
                                    </div>
                                    <div className='client_info'>
                                        <h6>Anais Coulon</h6>
                                        <p>Designer</p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Testimonails;

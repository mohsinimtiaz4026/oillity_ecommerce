import React from 'react';
import a from '../../assets/images/trending_img.png';
import './style.css';

function Marketing_Banner() {
    return (
        <>
            <section className='marketing_banner'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-4'>
                            <img src={a} alt='trending sale' />
                        </div>
                        <div className='col-8 text-center'>
                            <div className='banner_info'>
                                <h6>New Season trends!</h6>
                                <h1>Best Summer Collection</h1>
                                <p>Sale Get up to 50% Off</p>
                                <a class="button" id="button-5">
                                    <div id="translate"></div>
                                    <a href="#">Shop Now</a>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Marketing_Banner;

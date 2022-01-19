import React from 'react';
import './style.css';

const Service = () => {
    return (
        <>
            <section className='service'>
                <div className='container'>
                    <div className='row text-center'>
                        <div className='col-4'>
                            <i className='bi bi-truck'></i>
                            <h6>Free Delivery</h6>
                            <p>If you are going to use of Lorem, you need to be sure there anything</p>
                        </div>
                        <div className='col-4'>
                            <i className='bi bi-wallet'></i>
                            <h6>30 Days Return</h6>
                            <p>If you are going to use of Lorem, you need to be sure there anything</p>
                        </div>
                        <div className='col-4'>
                            <i className='bi bi-headset'></i>
                            <h6>24/7 Support</h6>
                            <p>If you are going to use of Lorem, you need to be sure there anything</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Service;

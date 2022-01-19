import React from 'react';
import './style.css';

const Subscription = () => {
    return (
        <>
            <section className='subscription'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <h2>Subscribe Our Newsletter</h2>
                        </div>
                        <div className='col-6'>
                            <div className="input-group mb-3" id='sub'>
                                <input type="text" className="form-control" placeholder="Your email address" aria-label="Your email address" aria-describedby="basic-addon2" />
                                    <span className="input-group-text" id="basic-addon2">Subscribe</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Subscription;

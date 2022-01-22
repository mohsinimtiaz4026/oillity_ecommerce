import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Contact = () => {
    return (
        <>
            <section className='contact'>
                <div className='backLinks'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-6'>
                                <p>Contact Us</p>
                            </div>
                            <div className='col-6'>
                                <ul>
                                    <li><NavLink to='/'>Home<i className='bi bi-chevron-right' /></NavLink>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contact-info'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-4'>
                                <div className='contact-address text-center'>
                                    <i className='bi bi-bookmark-heart-fill' />
                                    <h6>Address</h6>
                                    <p>123 Street, Old Trafford, London, UK</p>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='contact-email text-center'>
                                    <i className='bi bi-envelope-open-fill' />
                                    <h6>Email Address</h6>
                                    <a href='mailto:info@yourmail.com'>info@yourmail.com</a>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='contact-phone text-center'>
                                    <i className='bi bi-phone-fill' />
                                    <h6>Phone</h6>
                                    <p>+ 457 789 789 65</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6 mx-auto'>
                            <form>
                                <h2>Get In Touch</h2>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <input type="text" placeholder='Enter Name *' name='name' id='name' className='input-control' autoComplete='off' />
                                    </div>
                                    <div>
                                        <input type="email" placeholder='Enter Email *' name='email' id='email' className='input-control' autoComplete='off' />
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <input type="text" placeholder='Enter Phone *' name='phone' id='phone' className='input-control' autoComplete='off' />
                                    </div>
                                    <div>
                                        <input type="text" placeholder='Enter Subject *' name='subject' id='subject' className='input-control' autoComplete='off' />
                                    </div>
                                </div>
                                <div>
                                    <textarea type="text" placeholder='Enter Message *' name='message' id='message' className='input-control2' autoComplete='off' rows="5" />
                                </div>
                                <div className='text-center'>
                                    <a className='sendMessage'>Send Message</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;

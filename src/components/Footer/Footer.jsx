import React from 'react';
import logo from '../../assets/images/logo_light.png';
import './style.css';

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='first_section'>
                                <img src={logo} alt='logo' />
                                <p>If you are going to use of Lorem Ipsum need to be sure there isn't hidden of text</p>
                                <ul>
                                    <li><a href='#'><i className='bi bi-facebook'></i></a></li>
                                    <li><a href='#'><i className='bi bi-twitter'></i></a></li>
                                    <li><a href='#'><i className='bi bi-linkedin'></i></a></li>
                                    <li><a href='#'><i className='bi bi-youtube'></i></a></li>
                                    <li><a href='#'><i className='bi bi-instagram'></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-2'>
                            <div className='second_section'>
                                <h2>Useful Links</h2>
                                <ul>
                                    <li><a href='#'>About Us</a></li>
                                    <li><a href='#'>FAQ</a></li>
                                    <li><a href='#'>Location</a></li>
                                    <li><a href='#'>Affiliates</a></li>
                                    <li><a href='#'>Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-2'>
                            <div className='second_section'>
                                <h2>Category</h2>
                                <ul>
                                    <li><a href='#'>Men</a></li>
                                    <li><a href='#'>Woman</a></li>
                                    <li><a href='#'>Kids</a></li>
                                    <li><a href='#'>Best Seller</a></li>
                                    <li><a href='#'>New Arrivals</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-2'>
                            <div className='second_section'>
                                <h2>My Account</h2>
                                <ul>
                                    <li><a href='#'>My Account</a></li>
                                    <li><a href='#'>Discount</a></li>
                                    <li><a href='#'>Returns</a></li>
                                    <li><a href='#'>Order History</a></li>
                                    <li><a href='#'>Order Tracking</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='third_section'>
                                <h2>Contact Info</h2>
                                <ul>
                                    <li><a><i className='bi bi-geo-alt'/>123 Street, Old Trafford, New South London , UK</a></li>
                                    <li><a href='mailto:info@sitename.com'><i className='bi bi-envelope-open'/>info@sitename.com</a></li>
                                    <li><a><i className='bi bi-phone'/>+ 457 789 789 65</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer

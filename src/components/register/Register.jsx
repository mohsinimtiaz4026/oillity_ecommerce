import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Register = () => {
    return (
        <>
            <section className='register'>
                <div className='backLinks'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-6'>
                                <p>Register</p>
                            </div>
                            <div className='col-6'>
                                <ul>
                                    <li><NavLink to='/'>Home<i className='bi bi-chevron-right' /></NavLink>Register</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row my-5'>
                        <div className='col-6 mx-auto my-5'>
                            <div className='wrapper'>
                                <form>
                                    <h2>Register</h2>
                                    <div>
                                        <input placeholder='Your Email' id='email' name='email'
                                            className='input-control'
                                        />
                                    </div>
                                    <div>
                                        <input placeholder='Your Password' id='password' name='password' className='input-control' />
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <input type="checkbox" id="remember_me" name='remember_me' value="remember"/>
                                            <label for="remember_me">Remember Me</label>
                                        </div>
                                        <div>
                                            <a href='#'>Forgot password?</a>
                                        </div>
                                    </div>
                                    <div>
                                        <a href='#' type='submit' className='submitBtn'>Register</a>
                                    </div>
                                    <div className='option'>
                                        <p>OR</p>
                                    </div>
                                    <div className='social_btn'>
                                        <a href='#'><i className='bi bi-facebook'/>Facebook</a>
                                        <a href='#' id='sec'><i className='bi bi-twitter'/>Twitter</a>
                                    </div>
                                    <div className='signup_section'>
                                        <p>Already Have an account? <a href='login'>Sign In</a></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Register;

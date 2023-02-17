import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { Fade } from 'react-reveal';
import './Login.css';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='form-container'>
            <Fade bottom>
                <div className='form'>
                    <h2 className='form-title'>Login</h2>
                    <form>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                            <label for="floatingInput">Email</label>
                        </div>
                        <div className="form-floating mb-4">
                            <input
                                type={showPassword ? "text" : "password"} className="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                                required
                            />
                            <label for="floatingPassword">Password</label>
                            <p
                                className='show-password'
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {
                                    showPassword ?
                                        <FaEyeSlash className='fs-5'></FaEyeSlash>
                                        :
                                        <FaEye className='fs-5'></FaEye>
                                }
                            </p>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <div className='d-flex justify-content-between align-items-center'>
                                <label className="form-check-label fw-semibold" for="flexCheckDefault">
                                    Remember Me
                                </label>
                                <label className="form-check-label" for="flexCheckDefault">
                                    <Link className='forgot-password'> Forgot Password</Link>
                                </label>
                            </div>
                        </div>
                        <button className='form-btn' type="submit">Login</button>
                    </form>
                    <p className='text-center mt-4 fw-semibold'>Don't have an account? <Link to='/register' className='link'>Create an account</Link></p>
                </div>
            </Fade>
        </div>
    );
};

export default Login;
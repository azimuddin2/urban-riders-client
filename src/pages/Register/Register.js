import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createUser } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    return (
        <div className='form-container'>
            <Fade bottom>
                <div className='form'>
                    <h2 className='form-title'>Create an account</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input name='name' type="text" className="form-control" id="floatingName" placeholder="Name" required />
                            <label for="floatingName">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input name='email' type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" required />
                            <label for="floatingEmail">Email</label>
                        </div>
                        <div className="form-floating mb-4">
                            <input
                                name='password'
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
                            <label className="form-check-label fw-semibold" for="flexCheckDefault">
                                I agree to the <Link className='link'>terms and conditions</Link>
                            </label>
                        </div>
                        <button className='form-btn' type="submit">Create an account</button>
                    </form>
                    <p className='text-center mt-4 fw-semibold'>Already have an account? <Link to="/login" className='link'>Login</Link></p>
                </div>
                <SocialLogin></SocialLogin>
            </Fade>
        </div>
    );
};

export default Register;
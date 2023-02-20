import React, { useContext } from 'react';
import './SocialLogin.css';
import google from '../../../assets/icons/google.png';
import facebook from '../../../assets/icons/facebook.png';
import { Fade } from 'react-reveal';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-hot-toast';

const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleSignInWithGoogle = () => {
        signInWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                toast.error(error.message);
            })
    };

    return (
        <Fade bottom>
            <div className='social-login-container'>
                <div className='divider'>
                    <div className='divider-left'></div>
                    <div className='divider-text'>Or</div>
                    <div className='divider-right'></div>
                </div>
                <div>
                    <button
                        onClick={handleSignInWithGoogle}
                        className='social-btn'
                    >
                        <img className='social-image' src={google} alt="" />
                        <span className='social-text'>Continue with Google</span>
                    </button>
                    <button className='social-btn'>
                        <img className='social-image' src={facebook} alt="" />
                        <span className='social-text'>Continue with Facebook</span>
                    </button>
                </div>
            </div>
        </Fade>
    );
};

export default SocialLogin;
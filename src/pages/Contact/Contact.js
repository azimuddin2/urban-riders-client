import React from 'react';
import { Fade } from 'react-reveal';
import contact from '../../assets/images/contact-us.gif';
import './Contact.css';

const Contact = () => {
    return (
        <section className='container'>
            <div className='row form-container'>
                <Fade top>
                    <div className='d-grid col-lg-6 col-md-12 col-sm-12 gap-5'>
                        <img className='form-img' src={contact} alt="Contact" />
                    </div>
                </Fade>
                <Fade bottom>
                    <div className='d-grid col-lg-6 col-md-12 col-sm-12'>
                        <form className=' shadow rounded contact-form'>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" required />
                                <label htmlFor="floatingEmail">Email Address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingSubject" placeholder="subject" required />
                                <label htmlFor="floatingSubject">Subject</label>
                            </div>
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "150px" }} required></textarea>
                                <label htmlFor="floatingTextarea2">Your message</label>
                            </div>
                            <button className='form-btn' type="submit">Submit</button>
                        </form>
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default Contact;
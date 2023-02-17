import React from 'react';
import { Fade } from 'react-reveal';
import contact from '../../assets/images/contact-us.gif';
import './Contact.css';

const Contact = () => {
    return (
        <section className='container'>
            <div className='row form-container'>
                <Fade left>
                    <div className='d-grid col-lg-6 col-md-12 col-sm-12 gap-5'>
                        <img className='form-img' src={contact} alt="Contact" />
                    </div>
                </Fade>
                <Fade right>
                    <div className='d-grid col-lg-6 col-md-12 col-sm-12'>
                        <form className=' shadow rounded contact-form'>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingEmail" placeholder="name@example.com" required />
                                <label for="floatingEmail">Email Address</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingSubject" placeholder="subject" required />
                                <label for="floatingSubject">Subject</label>
                            </div>
                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "150px" }} required></textarea>
                                <label for="floatingTextarea2">Your message</label>
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
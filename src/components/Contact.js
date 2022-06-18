import React from 'react'
import Footer from './Footer'

export default function Contact() {
    return (
        <>
            <section className="header-bottom">
                <div className="inner">
                    <h1>CONTACT US</h1>
                    <h5>Regarding any related Queries and Doubts</h5>
                </div>
            </section>
            <section className="form container">
                <div className="wrapper">
                    <div className="left">
                        <h5 className="top-heading"><span>Cont</span>act Us</h5>
                        <h1>Please Get In Touch</h1>
                        <p>Schedule a free consultaion with our executives for your <br /> Startups Needs</p>
                        <h6>For any Queries regarding your startup and legal advice*</h6>
                        <form action="#">
                            <label for="name">Your name</label>
                            <input type="text" id="name" name="fullname" placeholder="" />
                            <label for="email">Your email</label>
                            <input type="text" id="email" name="eamil" placeholder="" />
                            <label for="name">Your phone</label>
                            <input type="text" id="phone" name="fullname" placeholder="" />
                            <select name="selection" id="selection">
                                <option value="selection">Subject</option>
                                <option value="selection">AGNi</option>
                                <option value="selection">BIS</option>
                                <option value="selection">Digital Marketing</option>
                                <option value="selection">GeM</option>
                                <option value="selection">Government Grants and Funding</option>
                                <option value="selection">IEC Certification</option>
                                <option value="selection">Industrial Land Banking </option>
                                <option value="selection">Intellectual Property Rights</option>
                                <option value="selection">ISO Certification</option>
                                <option value="selection">MSME Loans</option>
                                <option value="selection">Nidhi Prayas Yojna</option>
                                <option value="selection">NSIS</option>
                                <option value="selection">Pitch Deck</option>
                                <option value="selection">Seed Fund</option>
                                <option value="selection">Startup India Certification</option>
                                <option value="selection">TReDS</option>
                                <option value="selection">Udyam Certification</option>
                                <option value="selection">Venture Capitalist</option>
                            </select>
                            <button>SEND NOW</button>
                        </form>

                    </div>
                    <div className="right">
                        <img src="/assets/img/Contact us header icon image (300 × 400px).svg" alt="" width="300px" />
                    </div>
                </div>
            </section>
            <section className="map">
                <div className="inner">
                    <div className="left">
                        <p><iframe id='#iframe'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9189239587345!2d73.02031901472806!3d19.023293958570868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9af894cd333%3A0x5e54e1f91650ffc2!2sMedsys%20Consultancy%20Services%20LLP!5e0!3m2!1sen!2sin!4v1655264363444!5m2!1sen!2sin"
                            width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe></p>
                    </div>
                </div>
            </section>
            <section className="map-below">
                <div className="right container">
                    <div className="contact">
                        <i className="lni lni-envelope"></i>
                        <h1>EMAIL:</h1>
                        <a href="/">medsysconsultancy@gmail.com </a>
                        <i className="lni lni-phone"></i>
                        <h1>PHONE:</h1>
                        <a href="tel:+918881069069">+91 70204 38881</a>
                        <i className="lni lni-whatsapp"></i>
                        <h1>Chat with Us:</h1>
                        <a href="https://wa.me/+917020438881">+91 70204 38881</a>
                    </div>
                    <div className="address">
                        <i className="lni lni-map-marker"></i>
                        <h1 className="address-heading">ADDRESS:</h1>
                        <div className="inner">
                            <div className="item">
                                <h2 style={{ paddingRight: '10px' }}>Corporate Office:</h2>
                                <p> Medsys Consultancy Services LLP, 302, Safal Park, Plot No. 3 & 12, Sector - 25, Nerul, Navi
                                    Mumbai 400706</p>
                            </div>
                            <div className="item">
                                <h2>Registere Address:</h2>
                                <p>693, Medlife House, At/Post: Bahal, Tal: Chalisgaon, Dist: Jalgaon - 424101</p>
                            </div>
                        </div>
                        <div className="google-review">
                            <div className="google-review-inner">
                                <div className="inner-left">
                                <h2>Find Us Here:</h2>
                                <div className="left">
                                    <i className="lni lni-map-marker"></i>
                                </div>
                                </div>
                                <div className="inner-right">
                                <h2 style={{marginLeft:"3px"}}>Review Us Now:</h2>
                                <a href="https://g.page/r/CcL_UBb54VReEBI/review">
                                    <div className="right">
                                        <img src="/assets/img/google-icon.png" alt="" />
                                        <p>If you think we did great, <br />please click here to leave a <br />Google review for us!
                                        </p>
                                    </div>
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact">
                <div className="contact-mid">
                    <div className="left">
                        <img src="/assets/img/belowContactImg/Main Icon.svg" alt="" width="100px" />
                    </div>
                    <div className="right">
                        <div>
                            <img src="/assets/img/belowContactImg/Google Review.svg" alt="" />
                            <h6>Google Review</h6>
                        </div>
                        <div>
                            <img src="/assets/img/belowContactImg/Online Process.svg" alt="" />
                            <h6>100% Online Process</h6>
                        </div>
                        <div>
                            <img src="/assets/img/belowContactImg/Data is Safe.svg" alt="" />
                            <h6>Your Data is Safe</h6>
                        </div>
                    </div>
                </div>
                <div className="contact-social-links">
                    <button className="inner call">
                        <i className="lni lni-phone"></i>
                        <span>
                            <a href="tel:+918881069069">
                                <h3>Call Us <br /></h3>+91 7020438881
                            </a>
                        </span>
                    </button>
                    <button className="inner facebook">
                        <i className="lni lni-facebook-messenger"></i>
                        <span>
                            <a href="https://www.facebook.com/medsysconsultancy/?ref=pages_you_manage">
                                <h3>Chat ON <br /></h3>Facebook Messanger
                            </a>
                        </span>
                    </button>
                    <button className="inner whatsapp">
                        <i className="lni lni-whatsapp"></i>
                        <span>
                            <a href="https://wa.me/+917020438881">
                                <h3>Click here<br /></h3>For Whatsapp Chat
                            </a>
                        </span>
                    </button>
                    <button className="inner email">
                        <i className="lni lni-envelope"></i>
                        <span>
                            <a href="/">
                                <h3>Email Us<br /></h3>medsysconsultancy@gmail.com
                            </a>
                        </span>
                    </button>
                </div>
            </section>
            <Footer/>
        </>
    )
}

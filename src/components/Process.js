import React from 'react'
import Footer from './Footer'
import { TabTitle } from './Utillity';

export default function Process() {
    TabTitle("Our Process - medsysconsultancy.com");
    return (
        <>
            {/* <!-- =====================Header-below======================= --> */}
            <section className="header-below" id="header-below">
                <div className="inner">
                    <h1>Process</h1>
                    <h6>Our plans and working for successful execution</h6>
                </div>
            </section>
            {/* <!-- =====================How we work======================= --> */}
            <section className="container work">
        <h1 className="heading">How We work</h1>
        <div className="timeline-area">
            <div className="single-timeline">
                <div className="timeline-item">
                    <div className="timeline-content">
                        <h3 className="title">Listen</h3>
                        <p>This is the key step, where engagement with the client take place. We make sure that we have
                            good understanding of your company, your service but most importantly your value system.</p>
                    </div>
                    <div className="timeline-icon">
                        <i className="lni lni-volume"></i>
                    </div>
                    <div className="timeline-pin"></div>
                </div>
                <div className="timeline-info">
                    <h4 className="date">01</h4>
                </div>
                <div className="timeline-img"></div>
            </div>
            <div className="single-timeline">
                <div className="timeline-info">
                    <h4 className="date">02</h4>
                </div>
                <div className="timeline-item">
                    <div className="timeline-content">
                        <h3 className="title">Discovery</h3>
                        <p>This phase involves primary& secondary research, competitive landscape analysis, consumer insights, client engagement & inputs, economic environment analysis.</p>
                    </div>
                    <div className="timeline-icon">
                        <i className="lni lni-discover"></i>
                    </div>
                    <div className="timeline-pin"></div>
                </div>
               
                <div className="timeline-img"></div>
            </div>
            <div className="single-timeline">
                <div className="timeline-item">
                    <div className="timeline-content">
                        <h3 className="title">Design</h3>
                        <p>This is strategy development phase, where driven company's vision & objectives are taken into account. This involves huge brainstorming sessions with internal team and outside domain specialist.</p>
                    </div>
                    <div className="timeline-icon">
                        <i className="lni lni-connectdevelop"></i>
                    </div>
                    <div className="timeline-pin"></div>
                </div>
                <div className="timeline-info">
                    <h4 className="date">03</h4>
                </div>
                <div className="timeline-img"></div>
            </div>
            <div className="single-timeline">
                <div className="timeline-info">
                    <h4 className="date">04</h4>
                </div>
                <div className="timeline-item">
                    <div className="timeline-content">
                        <h3 className="title">Accelerate</h3>
                        <p>Accelerate is a database driven collaboration tool. This is an inclusive approach to build partnership with up-stream & down-stream business partners.</p>
                    </div>
                    <div className="timeline-icon">
                        <i className="lni lni-dropbox"></i>
                    </div>
                    <div className="timeline-pin"></div>
                </div>
                
                <div className="timeline-img"></div>
            </div>
            <div className="single-timeline">
                <div className="timeline-item">
                    <div className="timeline-content">
                        <h3 className="title">Analysis</h3>
                        <p>We believe if something cannot be measured, it cannot be done. We create milestones and benchmarks to ensure that compelling actions are taken to deliver results.</p>
                    </div>
                    <div className="timeline-icon">
                        <i className="lni lni-keyword-research"></i>
                    </div>
                    <div className="timeline-pin"></div>
                </div>
                <div className="timeline-info">
                    <h4 className="date">05</h4>
                </div>
                <div className="timeline-img"></div>
            </div>
            <div className="timeline-bar"></div>
        </div>
    </section>
            {/* <!-- =====================New Product======================= --> */}
            <section className="new-product">
                <div className="inner">
                    <h6>Contact Us</h6>
                    <h1>New Product on Your Mind?</h1>
                    <p>Your Ticket to Success. Fill the form and get the insight to grow your business</p>
                    <a href="/contact.html">
                        <button>Let's Connect</button>
                    </a>
                </div>
            </section>
            {/* <!-- ======================Profile=============== --> */}
            <section className="profile container">
                <div className="inner">
                    <div className="left">
                        <h1>Want to know more about us ?</h1>
                        <h6>Download our company profile</h6>
                    </div>
                    <div className="right" download="">
                        <a href="/assets/medsysPDF/MCSLLP_BUSINESS PRESENTATION.pdf">
                            <input type="button" value="Download" />
                        </a>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

import React from 'react'
import Footer from './Footer'

export default function Process() {
    return (
        <>
            {/* <!-- =====================Header-below======================= --> */}
            <section class="header-below" id="header-below">
                <div class="inner">
                    <h1>Process</h1>
                    <h6>Our plans and working for successful execution</h6>
                </div>
            </section>
            {/* <!-- =====================How we work======================= --> */}
            <section class="ourwork container" >
                <h1 class="section-heading">HOW WE WORK</h1>
                <div class="wrapper">
                    <div class="wrapper-inner">
                        <div class="item">
                            <div class="left content right-text">
                                <div class="text">
                                    <h3>Listen</h3>
                                    <p>This is the key step, where engagement with the client take place. We make sure that we
                                        have good understanding of your company, your service but most importantly your value
                                        system.</p>
                                </div>
                                <div class="icon">
                                    <i class="lni lni-volume green"></i>
                                </div>
                            </div>
                            <div class="timeline-pin"></div>
                            <div class="right odd">
                                <h3>01</h3>
                            </div>
                            <div class="mid-dot"></div>
                            <span></span>
                        </div>
                        <div class="item item-even">
                            <div class="left even">
                                <h3>02</h3>
                            </div>
                            <div class="right content left-text">
                                <div class="icon">
                                    <i class="lni lni-discover blue"></i>
                                </div>
                                <div class="text">
                                    <h3>Discovery</h3>
                                    <p>This phase involves primary& secondary research, competitive landscape analysis, consumer
                                        insights, client engagement & inputs, economic environment analysis.</p>
                                </div>
                                <div class="timeline2-pin"></div>
                            </div>
                            <div class="mid-dot dot-even"></div>
                            <span></span>
                        </div>
                        <div class="item item-odd">
                            <div class="left content right-text">
                                <div class="text">
                                    <h3>Design</h3>
                                    <p>This is strategy development phase, where driven company's vision & objectives are taken
                                        into account. This involves huge brainstorming sessions with internal team and outside
                                        domain specialist.</p>
                                </div>
                                <div class="icon">
                                    <i class="lni lni-connectdevelop pink"></i>
                                </div>
                            </div>
                            <div class="timeline-pin"></div>
                            <div class="right odd">
                                <h3>03</h3>
                            </div>
                            <div class="mid-dot "></div>
                            <span></span>
                        </div>
                        <div class="item item-even">
                            <div class="left even">
                                <h3>04</h3>
                            </div>
                            <div class="right content left-text">
                                <div class="icon">
                                    <i class="lni lni-hospital greenyellow"></i>
                                </div>
                                <div class="text">
                                    <h3>Accelerate</h3>
                                    <p>Accelerate is a database driven collaboration tool. This is an inclusive approach to
                                        build partnership with up-stream & down-stream business partners.</p>
                                </div>
                                <div class="timeline2-pin"></div>
                            </div>
                            <div class="mid-dot dot-even"></div>
                            <span></span>
                        </div>
                        <div class="item item-odd">
                            <div class="left content right-text">
                                <div class="text">
                                    <h3>analyse</h3>
                                    <p>We believe if something cannot be measured, it cannot be done. We create milestones and
                                        benchmarks to ensure that compelling actions are taken to deliver results.</p>
                                </div>
                                <div class="icon">
                                    <i class="lni lni-indent-increase blueviolet"></i>
                                </div>
                            </div>
                            <div class="timeline-pin"></div>
                            <div class="right odd">
                                <h3>05</h3>
                            </div>
                            <div class="mid-dot"></div>
                            <span></span>
                        </div>
                    </div>

                </div>
            </section>
            <section class="new-product">
                <div class="inner">
                    <h6>Contact Us</h6>
                    <h1>New Product on Your Mind?</h1>
                    <p>Your Ticket to Success. Fill the form and get the insight to grow your business</p>
                    <a href="/contact.html">
                        <button>Let's Connect</button>
                    </a>
                </div>
            </section>
            {/* <!-- ======================Profile=============== --> */}
            <section class="profile container">
                <div class="inner">
                    <div class="left">
                        <h1>Want to know more about us ?</h1>
                        <h6>Download our company profile</h6>
                    </div>
                    <div class="right" download="">
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

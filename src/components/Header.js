import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            {/* <!-- =================Top-Header====================== --> */}
            <div className="top-header">
                <ul>
                    <li><Link to="offers.html">Offers&nbsp;<img alt='medsys'
                        src="https://www.dutchuncleindia.com/theme/template/images/giphy.gif"
                        style={{ width: '15px' }} /></Link>&nbsp;</li>
                    <li><Link to="https://www.facebook.com/medsysconsultancy/?ref=pages_you_manage" rel="noopener noreferrer" style={{color:'#560216'}}><i className="fa-brands fa-facebook-f"
                        aria-hidden="true" style={{ color: '#fff', fontSize: '18px' }}></i>.</Link></li>
                    <li><Link to="https://www.instagram.com/medsysconsultancy/" rel="noopener noreferrer" style={{color:'#560216'}}><i className="fa-brands fa-instagram"
                        aria-hidden="true" style={{ color: '#fff', fontSize: '18px' }}></i>.</Link></li>
                    <li><Link to="https://twitter.com/MedsysIndia?fbclid=IwAR2NBFx4fVus5BIiCoZjxsxmz11QMM9T6F1NJyNoATQNv-Uv1O0aSCp-Zxk" rel="noopener noreferrer" style={{color:'#560216'}}><i className="fa-brands fa-twitter" aria-hidden="true"
                        style={{ fontSize: '18px', color: '#fff' }}></i>.</Link></li>
                    <li><Link to="https://www.linkedin.com/company/30242565/admin/" rel="noopener noreferrer" style={{color:'#560216'}}><i className="fa-brands fa-linkedin-in"
                        aria-hidden="true" style={{ color: '#fff', fontSize: '18px' }}></i>.</Link></li>
                    <li><Link to="/" rel="noopener noreferrer" style={{color:'#560216'}}><i className="fa-solid fa-envelope" aria-hidden="true"
                        style={{ color: '#fff', fontSize: '18px' }}></i>.</Link>&nbsp;</li>
                    <li className="border1"><Link className="fa-fa-phone" to="tel:+918881069069"><i
                        className="lni lni-phone-set"></i>&nbsp;&nbsp;Call Now</Link></li>
                    <li className="border1"><Link to="https://wa.me/+917020438881"><i className="fa-brands fa-whatsapp"
                        aria-hidden="true"></i> </Link></li>
                </ul>
            </div>
            {/* <!-- =================Header====================== --> */}
            <header id="header" className="header">
                <div className="container">
                    <input type="checkbox" name="" id="check" />

                    <div className="logo-container">
                        <img src="/assets/img/mainLogo.png" alt='medsys' />
                    </div>

                    <div className="nav-btn">
                        <div className="nav-links">
                            <ul>
                                <li className="nav-link nav-home" >
                                    <Link to="/">
                                        <i className="lni lni-home"></i></Link>
                                </li>
                                <li className="nav-link" >
                                    <Link to="/">About Us</Link>
                                </li>
                                <li className="nav-link" >
                                    <Link to="/">Our Services<i className="fa fa-caret-down"></i></Link>
                                    <div className="dropdown">
                                        <ul>
                                            <li className="dropdown-link">
                                                <Link to="/">Business Setup<i className="fa fa-caret-down"></i></Link>
                                                <div className="dropdown second">
                                                    <ul>

                                                        <li className="dropdown-link">
                                                            <Link to="/">Startup<i className="fa fa-caret-down"></i></Link>
                                                            <div className="dropdown second">
                                                                <ul>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/"> Startup Recognition</Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/"> Business Plan</Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/"> Startup Proposal</Link>
                                                                    </li>

                                                                    <li className="dropdown-link">
                                                                        <Link to="/"> Pitch Deck</Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/"> Fund Raising</Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/">Startup
                                                                            Schemes/grants</Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/"> GeM Registration</Link>
                                                                    </li>



                                                                    <div className="arrow"></div>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="dropdown-link">
                                                            <Link to="/">Business Incorporation<i
                                                                className="fa fa-caret-down"></i></Link>
                                                            <div className="dropdown second">
                                                                <ul>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/">Private Limited Company</Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/">Limited Liability Partnership - LLP</Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/">One Person Company - OPC</Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/">Sole Proprietorship</Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/">NIDHI Company</Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/">Producer Company</Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/">Partnership Firm</Link>
                                                                    </li>
                                                                    <div className="arrow"></div>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="dropdown-link">
                                                            <Link to="/">Business Registration & Licenses<i
                                                                className="fa fa-caret-down"></i></Link>
                                                            <div className="dropdown second">
                                                                <ul>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/"> MSME Registration</Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/"> Import Export Code [IEC]</Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/">Shop Act License</Link>
                                                                    </li>

                                                                    <li className="dropdown-link">
                                                                        <Link to="/">GST Registration</Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/">PF Registration</Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/">ESI Registration</Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/"> PASARA License</Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/"> APEDA Registration</Link>
                                                                    </li>

                                                                    <li className="dropdown-link">
                                                                        <Link to="/"> Food Licenses</Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/">Drug License</Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/">Barcode License</Link>
                                                                    </li>



                                                                    <div className="arrow"></div>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="dropdown-link">
                                                            <Link to="/">Other Registrations<i className="fa fa-caret-down"></i></Link>
                                                            <div className="dropdown second">
                                                                <ul>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/"> MPCB Registration</Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/"> ISO Certification</Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/">RERA Agent/Developer

                                                                        </Link>
                                                                    </li>


                                                                    <li className="dropdown-link">
                                                                        <Link to="/">DSC Token</Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/"> TAN Application</Link>
                                                                    </li>

                                                                    <li className="dropdown-link">
                                                                        <Link to="/"> PAN Application</Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/"> FSSAI Registration</Link>
                                                                    </li>

                                                                    <li className="dropdown-link">
                                                                        <Link to="/"> APEDA License</Link>
                                                                    </li>



                                                                    <div className="arrow"></div>
                                                                </ul>
                                                            </div>
                                                        </li>

                                                        <div className="arrow"></div>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/">NGO Management<i className="fa fa-caret-down"></i></Link>
                                                <div className="dropdown second">
                                                    <ul>
                                                        <li className="dropdown-link">
                                                            <Link to="/">Registration <i className="fa fa-caret-down"></i></Link>
                                                            <div className="dropdown second">
                                                                <ul>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/"> Trust Registration</Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/"> Society Registration</Link>
                                                                    </li>

                                                                    <li className="dropdown-link">
                                                                        <Link to="/"> Section 8 Company</Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/">NGO Darpan Registration</Link>
                                                                    </li>
                                                                    <div className="arrow"></div>
                                                                </ul>
                                                            </div>
                                                        </li>

                                                        <li className="dropdown-link">
                                                            <Link to="/">NGO Compliance<i className="fa fa-caret-down"></i></Link>
                                                            <div className="dropdown second">
                                                                <ul>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/"> 12A &amp; 80G Registration </Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/"> 12A &amp; 80G Renewal</Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/"> FCRA Registration </Link>
                                                                    </li>

                                                                    <li className="dropdown-link">
                                                                        <Link to="/">FCRA Renewal </Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/">CSR-1 Registration</Link>
                                                                    </li>

                                                                    <li className="dropdown-link">
                                                                        <Link to="/">Income tax Return Filing </Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/"> NGO Advocacy </Link>
                                                                    </li>

                                                                    <li className="dropdown-link">
                                                                        <Link to="/"> Profile Building </Link>
                                                                    </li>



                                                                    <div className="arrow"></div>
                                                                </ul>
                                                            </div>
                                                        </li>

                                                        <li className="dropdown-link">
                                                            <Link to="/">Reports<i className="fa fa-caret-down"></i></Link>
                                                            <div className="dropdown second">
                                                                <ul>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/">Annual Report </Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/">Audit report </Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/"> Project Proposal </Link>
                                                                    </li>

                                                                    <li className="dropdown-link">
                                                                        <Link to="/">CSR Project Reports </Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/">Trust Change Report </Link>
                                                                    </li>

                                                                    <div className="arrow"></div>
                                                                </ul>
                                                            </div>
                                                        </li>

                                                        <li className="dropdown-link">
                                                            <Link to="/">Funding<i className="fa fa-caret-down"></i></Link>
                                                            <div className="dropdown second">
                                                                <ul>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/">Government Funding </Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/">Government Grants </Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/">CSR Funding </Link>
                                                                    </li>
                                                                    <li className="dropdown-link">
                                                                        <Link to="/">Foreign Funding </Link>
                                                                    </li>

                                                                    <li className="dropdown-link">
                                                                        <Link to="/">Crowd Funding </Link>
                                                                    </li>
                                                                    <div className="arrow"></div>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <div className="arrow"></div>
                                                    </ul>
                                                </div>
                                            </li>

                                            <li className="dropdown-link">
                                                <Link to="/">Trademark and IP<i className="fa fa-caret-down"></i></Link>
                                                <div className="dropdown second">
                                                    <ul>
                                                        <li className="dropdown-link">
                                                            <Link to="/">Trademark Application</Link>
                                                        </li>
                                                        <li className="dropdown-link">
                                                            <Link to="/">Patent Application</Link>
                                                        </li>
                                                        <li className="dropdown-link">
                                                            <Link to="/">Copyright Registration</Link>
                                                        </li>
                                                        <li className="dropdown-link">
                                                            <Link to="/">Design Registration</Link>
                                                        </li>

                                                        <div className="arrow"></div>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="dropdown-link">
                                                <Link to="/">Digital Branding<i className="fa fa-caret-down"></i></Link>
                                                <div className="dropdown second">
                                                    <ul>
                                                        <li className="dropdown-link">
                                                            <Link to="/">Branding</Link>
                                                        </li>
                                                        <li className="dropdown-link">
                                                            <Link to="/">Market Survey </Link>
                                                        </li>
                                                        <li className="dropdown-link">
                                                            <Link to="/">Market Research </Link>
                                                        </li>

                                                        <li className="dropdown-link">
                                                            <Link to="/">Social Media marketing </Link>
                                                        </li>
                                                        <li className="dropdown-link">
                                                            <Link to="/">Content Writing </Link>
                                                        </li>
                                                        <li className="dropdown-link">
                                                            <Link to="/"> Web Development </Link>
                                                        </li>

                                                        <li className="dropdown-link">
                                                            <Link to="/">App Development </Link>
                                                        </li>
                                                        <li className="dropdown-link">
                                                            <Link to="/">SEO Consulting </Link>
                                                        </li>
                                                        <li className="dropdown-link">
                                                            <Link to="/"> Corporate Identity </Link>
                                                        </li>

                                                        <li className="dropdown-link">
                                                            <Link to="/">Product Design</Link>
                                                        </li>

                                                        <div className="arrow"></div>
                                                    </ul>
                                                </div>
                                            </li>
                                            <div className="arrow"></div>
                                        </ul>
                                    </div>
                                </li>

                                <li className="nav-link">
                                    <Link to="/process">Our Process</Link>
                                </li>
                                <li className="nav-link">
                                    <Link to="/">Blog</Link>
                                </li>

                                <li className="nav-link">
                                    <Link to="contact">Contact Us</Link>
                                </li>

                                <li className="search">
                                    <div className="containersearch">
                                        <input type="text" placeholder="Search" id='search'/>
                                    </div>
                                </li>
                                {/* <li>
                                    <div className="login"><Link to="/">
                                        <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
                                        <lord-icon src="https://cdn.lordicon.com/dqxvvqzi.json" trigger="click"
                                            colors="outline:#121331,primary:#f4c89c,secondary:#4bb3fd" stroke="30"
                                            state="hover-nodding" >
                                        </lord-icon>
                                    </Link>
                                    </div>
                                </li> */}
                            </ul>
                        </div>

                    </div>
                    <div className="hamburger-menu-container">
                        <div className="hamburger-menu">
                            <div></div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

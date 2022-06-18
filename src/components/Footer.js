import React from 'react'
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <>
            <footer>

<div class="footer_upper d-flex">
    <div class="footer_menu">
        <h2 class="border-none"><img src="/assets/img/mainLogo.png" alt="" width="100px"/></h2>
        <ul>
            <li><Link to="/">About Us</Link></li>
            {/* <li><Link to="/">Customer Reviews</Link></li> */}
            <li><Link to="contact">Contact US</Link></li>
            <li><Link to="/">Career</Link></li>
            <li><Link to="/">Pay US</Link></li>
        </ul>
    </div>
    <div class="footer_menu">
        <h2>POPULAR SERVICES</h2>
        <ul>
            <li><Link to="/">Business Setup</Link></li>
            <li><Link to="/">NGO management</Link></li>
            <li><Link to="/">Trademark and IP</Link></li>
            <li><Link to="/">Digital Branding</Link></li>
        </ul>
    </div>
    <div class="footer_menu">
        <h2>TERMS AND POLICY</h2>
        <ul>
            <li><Link to="/terms&conditions">Terms and Conditions</Link></li>
            <li><Link to="/privacypolicy">Privacy Policy</Link></li>
            <li><Link to="/refundpolicy">Refund Policy</Link></li>
        </ul>
    </div>
    <div class="footer_menu">
        <h2>CONNECT WITH US</h2>
        <ul>
            <li><Link to="/">Partner with Us</Link></li>
            <li><Link to="/">Customer Review</Link></li>

            <li><Link to="/">Suggestions and Feedback</Link></li>
        </ul>
    </div>
</div>
<div class="footer_botton">
    <h3>OUR OFFICE</h3>
    <ul>
        <Link to="https://www.facebook.com/medsysconsultancy/?ref=pages_you_manage"><i
                class="lni lni-facebook"></i></Link>
        <Link
            to="https://twitter.com/MedsysIndia?fbclid=IwAR2NBFx4fVus5BIiCoZjxsxmz11QMM9T6F1NJyNoATQNv-Uv1O0aSCp-Zxk "><i
                class="lni lni-twitter"></i></Link>
        <Link to="https://www.instagram.com/medsysconsultancy/"><i
                class="lni lni-instagram"></i></Link>
        <Link to="https://www.linkedin.com/company/30242565/admin/  "><i
                class="lni lni-linkedin"></i></Link>
    </ul>
    <h5>
        <i class="lni lni-map-marker"></i>Mumbai
        <i class="lni lni-map-marker"></i>Navi-Mumbai
        <i class="lni lni-map-marker"></i>Pune
        <i class="lni lni-map-marker"></i>Nashik
        <i class="lni lni-map-marker"></i>Delhi
        <i class="lni lni-map-marker"></i>Noida
    </h5>
    <div class="footer-bottom-last">
        <div class="inner d-flex">
            <i class="lni lni-thumbs-up"></i>
            <h4>ASSURED CUSTOMER <br/> SATISFACTION</h4>
        </div>
        <div class="inner d-flex">
            <i class="lni lni-lock-alt"></i>
            <h4>CLIENT DATA <br/> CONFIDENTIALITY</h4>
        </div>
        <div class="inner d-flex">
            <i class="lni lni-paypal"></i>
            <h4>NO HIDDEN <br/> FEE</h4>
        </div>
        <div class="inner d-flex">
            <i class="lni lni-comments-reply"></i>
            <h4>SECURE ONLINE <br/> PAYMENT</h4>
        </div>
    </div>
</div>
</footer>
        </>
    )
}

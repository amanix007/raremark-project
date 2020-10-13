import React, { Component } from "react";
import "./footer.css";
import _manifest from "../../_manifest";
import { Link } from "react-router-dom";


class FooterComponent extends Component {
    render() {
        const copyrightYear = new Date().getFullYear();
        return (
            <div className="FooterComponent">
                <footer className="footer">
                    <div className="container">
                        <div className="row top">
                            <div className="col-sm-6 col-md-3">

                                <div className="footer-selector">
                                    <select className="f-selector" name="language" id="">
                                        <option value="English">English</option>
                                        <option value="Spanish">Spanish</option>
                                    </select>
                                </div>

                                <div className="footer-selector">
                                    <select className="f-selector" name="currency" id="">
                                        <option value="INR">INR</option>
                                        <option value="USD">USD</option>
                                    </select>
                                </div>

                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="footer-menu">
                                    <h5>Airbnb</h5>
                                    <ul>
                                        <li>
                                            <Link to="#">About us</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Careers</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Press</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Policies</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Help</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Diversity & Belonging</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>


                            <div className="col-sm-6 col-md-3">
                                <div className="footer-menu">
                                    <h5>Discover</h5>
                                    <ul>
                                        <li>
                                            <Link to="#">Trust & Safety</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Travel Credit</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Gidt Cards</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Airbnb Citizen</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Business Travel</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Guidebooks</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Airbnbmag</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">


                                <div className="footer-menu">
                                    <h5>Hosting</h5>
                                    <ul>
                                        <li>
                                            <Link to="#">Why Host</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Hospitality </Link>
                                        </li>
                                        <li>
                                            <Link to="#">Responsible Hosting</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Community Center</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="left">
                                <div className="logo">
                                    <img src="" alt="" />
                                </div>
                                <p>Airbnb, Inc.</p>
                            </div>
                            <div className="right">
                                <ul className="basic-menu">
                                    <li><Link to="#">Terms</Link></li>
                                    <li><Link to="#">Privacy</Link></li>
                                    <li><Link to="#">Sitemap</Link></li>
                                </ul>
                                <ul className="social-menu">
                                    <li> <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li> <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li> <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </footer>
            </div>
        );
    }
}

FooterComponent.propTypes = {};

export default FooterComponent;

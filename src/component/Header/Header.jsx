import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../../App.css';
import HowToPlay from "../Header/HowToPlay";
import Promotions from "../Header/Promotions";
import Explore from "../Header/Explore";
import Download from "../Header/Download";
import '../Header/Component.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Hamburger from "./Hamburger";

function Header() {

    return (
        <>
            <Router>
                <header id="myHeader">
                    <div className="container">
                        <nav className="navbar navbar-expand-xl navbar-light ">
                            <Link to="/" className="header-logo"><img src="https://web.pokerbaazicdn.com/assets/images/pokerbaazilogo-black.svg" alt="Pokerbaazi" /></Link>
                            <Hamburger />

                            <div className="collapse navbar-collapse position-static" id="navbarNavAltMarkup">
                                <ul className="navbar-nav">
                                    <li className="dropdown position-static howToPLayNav">
                                        <Link className="nav-item" to="/" data-toggle="dropdownnn" aria-haspopup="true" aria-expanded="false">
                                            How To Play
                                        </Link>
                                    </li>
                                    <li className="dropdown position-static promotionsNav">
                                        <Link className="nav-item" to="/Promotions" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Promotions</Link>
                                    </li>
                                    <li className="dropdown position-static exploreNav">
                                        <Link className="nav-item" to="/Explore" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Explore</Link>
                                    </li>
                                    <li className="dropdown position-static downloadNav">
                                        <Link className="nav-item" to="/Download" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Download</Link>
                                    </li>
                                </ul>
                            </div>
                            <Link to="/faq" className="header-call-iocn d-none d-md-block"><i className="icustomercare"></i></Link>

                            <Link to="https://dashboard.pokerbaazi.com/login-credentials" className="beforeLogin loginbutton_gta conbutton pink-bg d-none d-md-block">Login</Link>
                            <Link to="https://dashboard.pokerbaazi.com/register" className="beforeLogin conbutton blue-bg d-none d-md-block ms-3 signupbutton_gta">Sign Up</Link>
                        </nav>
                    </div>
                </header>
                <Routes>
                    <Route path="/" element={<HowToPlay />} />
                    <Route path="/Promotions" element={<Promotions />} />
                    <Route path="/Explore" element={<Explore />} />
                    <Route path="/Download" element={<Download />} />
                </Routes>
            </Router>
        </>
    );
}

export default Header;
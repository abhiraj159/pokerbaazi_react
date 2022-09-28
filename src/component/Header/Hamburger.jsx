import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../Header/Component.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export default function Hamburger() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button className='hambgr-btn navbar-toggler menu-toggle-btn' onClick={handleShow} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className='hamburger_dgn1'></span>
                <span className='hamburger_dgn2'></span>
                <span className='hamburger_dgn3'></span>
            </Button>

            <Offcanvas placement="top" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <div>

                            <img className='brand-logo' src="https://web.pokerbaazicdn.com/assets/images/pokerbaazilogo-black.svg" alt="Pokerbaazi" />
                        </div>

                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="navbar-nav">
                        <li className="dropdown position-static howToPLayNav">
                            <Link className="nav-item" to="/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                </Offcanvas.Body>
            </Offcanvas>

        </>
    )
}



import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../Header/Component.css";

function Banner() {

    return (
        <>
            <section className="mainwarper position-relative slidedots">
                <div data-inviewport="fade-bottomtotop" className="pleft img50 ptop posabb d-none d-lg-block pt-4 mt-5 is-inViewport">
                    <img src="https://web.pokerbaazicdn.com/asset/images/topbannerleft-bg.png" className="img-fluid " width="70" />
                </div>
                <div data-inviewport="fade-toptobottom" className="ptop img50 pright posabb d-none d-lg-block pt-5 is-inViewport">
                    <img src="https://web.pokerbaazicdn.com/asset/images/topbannerright-bg.png" className="img-fluid mt-5 " width="50" />
                </div>

                <div data-inviewport="fade-toptobottom" className="pbottom img50 pright posabb d-none d-lg-block pb-5 pr-5 mr-5">
                    <img src="https://web.pokerbaazicdn.com/asset/images/redttiles_bg.png" className="img-fluid mb-5" />
                    <br />
                    <br />
                </div>
                <img src="https://web.pokerbaazicdn.com/asset/images/mainbg-sec.webp" className="img-fluid w-100 d-none d-md-block" width="50" />
                <img src="https://web.pokerbaazicdn.com/asset/images/mobile-banner.webp" className="img-fluid mobimg d-block d-md-none mb-4" />
                <div className="mainwarperinner">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-xl-6 col-lg-7 col-md-8 col-sm-6  d-none d-md-block">
                                <div className="mainbannercontent ">
                                    <h5 className="mb-3 mb-lg-4 text-white">Play the game that doesn't play you </h5>
                                    <div className="bluemedline whitebg"></div>
                                    <h2 className=" text-white">You hold<br />
                                        the cards
                                        <span>Download the pokerBaazi app</span>
                                    </h2>
                                    <div className="downloadlinks mb-3 ">
                                        <div className="getlinkapp"><span>+91</span>
                                            <input type="number" placeholder="Enter Mobile number" className="w-100" id="myInput" />
                                            <button type="button" className="commanbuton">Get  link</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6  col-lg-5 col-md-4 col-sm-6 text-center text-md-right align-self-end">
                                <div className="text-center d-block d-md-none mb-3">
                                    <h6 className=" text-white">Play the game that doesn't play you</h6>
                                    <h4 className="font-weight-bold pt-1 pb-1  text-white">You Hold The Cards</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Banner;
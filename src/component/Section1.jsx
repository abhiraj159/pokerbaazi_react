import React from 'react';
import '../component/Header/Component.css';


export const Section1 = () => {
    return (
        <>
            <section className="companesec pt-5 pb-3 position-relative">
                <div className="pleft pbottom posabb zindex2 img50 pt-4 mt-5"><img src="https://web.pokerbaazicdn.com/asset/images/bluebg-left-bg.png" className="img-fluid " width="90" /></div>
                <div data-inviewport="fade-toptobottom" className="ptop img50 pright posabb zindex2 text-right is-inViewport"><img src="https://web.pokerbaazicdn.com/asset/images/bluebg-right-bg.png" className="img-fluid " width="70" /></div>
                <div className="container py-3">
                    <h2>
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-3 col-sm-6 col-6 mb-4 pb-2 mb-sm-4">
                                <div className="compdd d-inline-block text-center  text-sm-left">
                                    <p>20 Lac+</p>
                                    <span><img src="https://web.pokerbaazicdn.com/asset/images/cm-icon-4.svg" className="img-fluid mr-2" />Trusted Users</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6  col-6 mb-4 pb-2 mb-sm-4">
                                <div className="compdd d-inline-block text-center  text-sm-left">
                                    <p>7 Years</p>
                                    <span><img src="https://web.pokerbaazicdn.com/asset/images/icons/cm-icon-1.svg" className="img-fluid mr-2" />of  Poker Pioneering  </span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6  col-6 mb-4 pb-2 mb-sm-4">
                                <div className="compdd d-inline-block text-center  text-sm-left">
                                    <p>1 Billion</p>
                                    <span><img src="https://web.pokerbaazicdn.com/asset/images/cm-icon-3.svg" className="img-fluid mr-2" />Hands Played</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6  col-6  mb-4 pb-2 mb-sm-4">
                                <div className="compdd d-inline-block text-center  text-sm-left">
                                    <p>20 Cr+</p>
                                    <span><img src="https://web.pokerbaazicdn.com/asset/images/icons/cm-icon-4.svg" className="img-fluid mr-2" />Prize Pool in September</span>
                                </div>
                            </div>
                        </div>
                    </h2>
                </div>
            </section>
        </>
    )
}

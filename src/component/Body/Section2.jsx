import React from 'react';
import '../../App.css';

export default function Section2() {
    var vid = document.getElementById("myVideoss");

    function playVid() {
        vid.play();
    }

    function myFunctions() {
        var x = document.getElementById("myDIVs");

        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    return (
        <>
            <section className="pt-5  position-relative">
                <div data-inviewport="fade-toptobottom" className="pleft img50 mptop40 ptop posabb pl-0 pl-sm-5 pt-1">
                    <img src="https://web.pokerbaazicdn.com/asset/images/tringle-bg.png" className="img-fluid " style={{ opacity: .5 }} />
                </div>
                <div data-inviewport="fade-toptobottom" className="pright ptop posabb img50 mptop40 pr-1 pr-md-5 mr-0 mr-md-0 text-right">
                    <img src="https://web.pokerbaazicdn.com/asset/images/heart-twobg.png" className="img-fluid " width="100" /></div>
                <div data-inviewport="fade-toptobottom" className="pleft poscenter posabb img50">
                    <img src="https://web.pokerbaazicdn.com/asset/images/tiger-left-bg.png" className="img-fluid " width="100" />
                </div>
                <div className="container">
                    <div className="mphedcon text-center mb-5">
                        <div className="bluemedline"></div>
                        <h2 className="mphed pl-4 pl-md-0 pr-4 pr-md-0">Discover a World-Class Gaming Experience </h2>
                        <div className="mptext">It's not just a game. It's a sport where you play for gold, glory and everything in between. </div>
                    </div>
                    <div className="row justify-content-center pt-0 pt-md-4">
                        <div className="col-lg-10">
                            <div className="text-center  videotext">
                                <h4>Hear it from Shahid</h4>
                                <div className="videocover videocovers my-3">
                                    <div id="myDIVs">
                                        <button onClick={playVid} type="button">
                                            <span onClick={myFunctions}>
                                                <img src="https://web.pokerbaazicdn.com/asset/images/video-play.svg" className="img-fluid" /></span></button>
                                    </div>
                                    <div className="yt_video_wrapper">
                                        <video id="myVideoss" width="900" height="506" controls poster="https://web.pokerbaazicdn.com/asset/images/videocover.webp">
                                            <source src="https://pb-app-download.sgp1.digitaloceanspaces.com/pokerhomevideo1.mp4" type="video/mp4" />
                                            <source src="https://web.pokerbaazicdn.com/asset/videos/pokerhomevideo.webm" type="video/webm" />
                                        </video>
                                    </div>
                                    <img src="https://web.pokerbaazicdn.com/asset/images/videocover.webp" className="img-fluid w-100 videocimg" />
                                </div>
                                <p>Seamless gameplay, world-class experience and an adventure you’d want to go on again and again. This is where experts are made.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center videotext pt-2">
                        <div className="col-lg-6">
                            <div className="pt-2 text-center">
                                <h5>Emojis &amp; Throwables </h5>
                                <div className="videocover videocovers my-3">
                                    <div className="yt_video_wrapper">
                                        <iframe width="738" className="w-100" src="https://www.youtube.com/embed/O93u0Dzlbmg"
                                            srcDoc="<style>*{margin:0;padding:0;overflow:hidden}
                       .imgs{position:absolute;width:100%;top:0;bottom:0;margin:auto; border-radius:7px;}
                       .imgss{position:absolute; width:80px; height:80px;  top:50%; transform:translateY(-50%);margin:0 auto; left:0; right:0}
                       </style><a href=https://www.youtube.com/embed/O93u0Dzlbmg?autoplay=1><img src=https://web.pokerbaazicdn.com/asset/images/videocovernew.webp  class=imgs><img src='https://web.pokerbaazicdn.com/asset/images/video-play.svg'  class=imgss  /></a>"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                    </div>
                                    <img src="https://web.pokerbaazicdn.com/asset/images/videocovernew.webp" className="img-fluid w-100 videocimg" />
                                </div>
                                <p>Poker is a thrilling and interesting sport. Now it’s time to make poker fun with Emojis, Throwables, and Voice chat feature at the table. Interact with your opponents at the table and make online poker fun.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pt-2 text-center">
                                <h5>Player Stats Feature</h5>
                                <div className="videocover videocovers my-3">
                                    <div className="yt_video_wrapper">
                                        <iframe width="738" className="w-100" src="https://www.youtube.com/embed/IudST0ACv9E"
                                            srcDoc="<style>*{margin:0;padding:0;overflow:hidden}
                       .imgs{position:absolute;width:100%;top:0;bottom:0;margin:auto; border-radius:7px;}
                       .imgss{position:absolute; width:80px; height:80px;  top:50%; transform:translateY(-50%);margin:0 auto; left:0; right:0}
                       </style><a href=https://www.youtube.com/embed/IudST0ACv9E?autoplay=1><img src=https://web.pokerbaazicdn.com/asset/images/videocovernew-a.webp  class=imgs><img src='https://web.pokerbaazicdn.com/asset/images/video-play.svg'  class=imgss  /></a>"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                    </div>
                                    <img src="https://web.pokerbaazicdn.com/asset/images/videocovernew-a.webp" className="img-fluid w-100 videocimg" />
                                </div>
                                <p>In poker, information is everything. With the Player Stats feature, know the player before your PLAY the player. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import '../../App.css';
import Banner from "./Banner";
import { Section1 } from "../Section1";
import Section2 from "../Body/Section2";
import { Section3 } from "../Body/Section3";
import { Section4 } from "../Body/Section4";
import { Section5 } from "../Body/Section5";
import { Section6 } from "../Body/Section6";
import { Section7 } from "../Body/Section7";
import { Section8 } from "../Body/Section8";
import { Section9 } from "../Body/Section9";
import { Section10 } from "../Body/Section10";
import { QuickLink } from "../QuickLink/QuickLink";
import { Footer } from "../Footer/Footer";

function HowToPlay() {
    return (
        <>
            <section className="newstrigersec py-2 py-md-3 text-center ">
                <div className="container text-uppercase">
                    <h2 className="mb-0 p-0">This is 'How To Play' Section</h2>
                </div>
            </section>
            <Banner />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
            <Section10 />
            <QuickLink />
            {/* <Footer /> */}
        </>
    );
}

export default HowToPlay;
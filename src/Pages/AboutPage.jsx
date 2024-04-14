import React from "react";
import LandingPageNavbar from "../Components/LandingPageNavbar";
import "../Styles/About.css";
import LandingPageFooter from "../Components/LandingPageFooter";

const AboutPage = () => {
  return (
    <div>
      <LandingPageNavbar />
      <section>
        <div className="imgHeight"></div>
      </section>

      <section className="bg-light container-fluid pt-4 mb-3 ">
        <div className="fw-bold fs-3 text">
          Don’t squeeze in a sedan when you could relax in a van.
        </div>
        <div className=" mt-3">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉) Our
          team is full of vanlife enthusiasts who know firsthand the magic of
          touring the world on 4 wheels.
        </div>

        <div className="downColor mt-5 p-4 rounded">
            <div className="fs- fw-bold">
                Your destination is waiting. <br /> Your van is ready.
            </div>

            <button className="btn btn-dark mt-3">Explore our vans</button>
        </div>
      </section>

      <LandingPageFooter/>
    </div>
  );
};

export default AboutPage;

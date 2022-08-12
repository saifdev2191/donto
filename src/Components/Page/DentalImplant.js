import React, { Component } from "react";
import Banner from "../Banner";

import "./util.css";

class DentalImplant extends Component {
  render() {
    return (
      <>
        <Banner pageTitle="Dental Implant" />

        <section className="about-page-top-content-wrap section-padding">
          <div className="container container-dental-implant">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-8 offset-lg-2 text-center">
                <div className="section-text-wrap">
                  <h1>WHAT IS A DENTAL IMPLANT ?</h1>
                  <p className="dental-implant-ul">
                    Dental implants are easily the most popular and also the
                    ideal solution, for replacing your missing tooth/teeth. They
                    have definitely changed the course of dentistry in the last
                    quarter of a century or so. ​ A dental implant is a
                    tooth-like replacement of one or more missing teeth. It
                    involves inserting a small titanium screw into the socket of
                    the missing teeth that looks and functions like the real
                    ones and can be used to replace a single tooth or several
                    teeth Moreover, an implant is a free-standing unit and so,
                    unlike crowns and bridges, it does not involve adjacent
                    teeth in any way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-page-top-content-wrap  section-padding-nope">
          <div className="container container-dental-implant">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-8 offset-lg-2 text-center">
                <div className="section-text-wrap">
                  {/* <SectionTitleOne BigTitle="Patient Focused Approach" /> */}
                  <h1>ADVANTAGES OF DENTAL IMPLANTS</h1>
                  <ul className="dental-implant-ul">
                    <li>
                      Dental Implants help restore the lost tooth and become the
                      next best thing to your natural teeth
                    </li>
                    <li>
                      Implants are a durable solution with the potential to even
                      outlive the patient
                    </li>
                    <li>
                      Dental Implants help maintain the shape and contour of
                      face & smile which can go wrong due to missing teeth
                      making the facial muscles sag
                    </li>
                    <li>
                      Implants don’t harm the adjacent tooth structure in any
                      manner and protect healthy bone
                    </li>
                    <li>
                      Implants ensure superior appearance and comfort with no
                      speech issue to deal
                    </li>
                    <li>
                      Implants boost your self-esteem for being a perfect
                      solution to the missing tooth
                    </li>
                    <li>
                      Implants give the freedom to enjoy your favourite foods
                      without any worry
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-page-top-content-wrap section-padding">
          <div className="container container-dental-implant">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-8 offset-lg-2 text-center">
                <div className="section-text-wrap">
                  <h1>WHO IS A GOOD CANDIDATE?</h1>
                  <ul className="dental-implant-ul">
                    <li>
                      People with a single missing tooth in the front or back
                      region.
                    </li>
                    <li>
                      People with several missing teeth in the jaw, who do not
                      want a tooth-supported bridge.
                    </li>
                    <li>People with all teeth missing.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default DentalImplant;

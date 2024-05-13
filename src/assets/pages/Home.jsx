import NavBar from "../components/NavBar";
import img1 from "../images/health_training_thumbnail.png";
import img2 from "../images/skill_aquisition_thumbnail.png";
import img3 from "../images/skill_aquisition_thumbnail.png";
import CPRThumnail from "../images/admin_class_thumbnail_lg.png";
import ACLSThumbnail from "../images/acls_thumbnail.png";
import PALSThumbnaill from "../images/pals_thumbnail.png";
import portfolioUser from "../images/portfolio_user.png";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PortfolioItem from "../components/PortfolioItem";
import Input from "../components/Input";
import TextareaInput from "../components/TextAreaInput";
import Footer from "../components/Footer";

export default function Home() {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "60px",
    slidesToShow: 2,
  };

  return (
    <div>
      <NavBar />

      <div className="flex justify-center w-full">
        <div className="flex flex-col w-10/12">
          <section className="flex gap-x-5 my-24">
            <img
              src={img1}
              alt="Training ans Consultation Services"
              className="max-w-[648px] max-h-[300px]"
            />
            <div className="flex flex-col gap-y-10 justify-center">
              <h3 className="text-primary text-2xl">
                Healthcare Training and Consultation Services
              </h3>
              <p>
                Well articulated trainings provided by dedicated and trained
                professionals.{" "}
              </p>
              <NavLink to="/classes">
                {" "}
                <Button primary className="px-10">
                  {" "}
                  View Classes
                </Button>
              </NavLink>
            </div>
          </section>

          <section className="flex flex-row-reverse gap-x-5 my-24">
            <img
              src={img2}
              alt="Training ans Consultation Services"
              className="max-w-[648px] max-h-[300px]"
            />
            <div className="flex flex-col gap-y-6 justify-center">
              <h3 className="text-primary text-2xl">
                Nyoni Equip Support & Empower LLC
              </h3>
              <p>
                we are a healthcare business that is aimed at delivering quality
                healthcare and safety certification training classes. Our
                classes are aimed to provide the best training there is in the
                healthcare industry. We provide training to all individuals not
                only health practitioners. Our Training are aligned with the
                American Heart Association.{" "}
              </p>
            </div>
          </section>

          <section className="flex gap-x-5 my-24">
            <img
              src={img2}
              alt="Training ans Consultation Services"
              className="max-w-[648px] max-h-[300px]"
            />
            <div className="flex flex-col gap-y-6 justify-center">
              <h3 className="text-primary text-2xl">
                Corporate Training and Skills Acquisition
              </h3>
              <p>
                We also offer corporate training services for the following
                classes which are under corporate pricing.
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li className="text-base">Heart Saver First Aid/CPR AED</li>
                <li className="text-base">AHA BLS/CPR AED</li>
                <li className="text-base">ACLS Renewal and Initial</li>
                <li className="text-base">PALS Renewal and Initial</li>
              </ul>
              <NavLink to="/classes">
                <Button primary className="px-10">
                  Request a Quote
                </Button>
              </NavLink>
            </div>
          </section>

          <section className="my-24">
            <h2 className="text-primary text-2xl">
              Popular Certifications Offered
            </h2>
            <div className="flex gap-x-10 pt-5">
              <NavLink
                to="/courses/12"
                className="flex flex-col justify-center"
              >
                <img
                  src={CPRThumnail}
                  alt="CPR Certification"
                  className="max-h-[150px] max-w-[265px] object-contain"
                />
                <span className="text-center font-semibold text-xs pt-2">
                  CPR Training
                </span>
              </NavLink>

              <NavLink
                to="/courses/12"
                className="flex flex-col justify-center"
              >
                <img
                  src={ACLSThumbnail}
                  alt="CPR Certification"
                  className="max-h-[150px] max-w-[265px] object-contain"
                />
                <span className="text-center font-semibold text-xs pt-2">
                  ACLS Certification
                </span>
              </NavLink>

              <NavLink
                to="/courses/12"
                className="flex flex-col justify-center"
              >
                <img
                  src={PALSThumbnaill}
                  alt="CPR Certification"
                  className="max-h-[150px] max-w-[265px] object-contain"
                />
                <span className="text-center font-semibold text-xs pt-2">
                  PALS Certification
                </span>
              </NavLink>
            </div>
          </section>

          <section className="my-24">
            <h2 className="text-primary text-2xl">What People Say About Us</h2>
            <Slider {...settings} className="mt-5">
              <PortfolioItem />
              <PortfolioItem />
              <PortfolioItem />
            </Slider>
          </section>

          <section className="my-24">
            <h2 className="text-primary text-2xl"> Get In Touch</h2>

            <div className="grid grid-cols-2 mt-3 gap-3">
              <Input placeholder="Name" type="text" onChange={(value) => {}} />
              <Input
                placeholder="Email"
                type="email"
                onChange={(value) => {}}
              />
              <Input
                placeholder="Subject"
                type="text"
                onChange={(value) => {}}
                className="col-span-2"
              />
              <TextareaInput
                placeholder="Type your message here..."
                className="col-span-2"
              />
              <Button primary className="w-1/3" onClick={() => {}}>
                Submit
              </Button>
            </div>
          </section>

          <section className="mt-24 mb-8">
            <Footer />
          </section>
        </div>
      </div>
    </div>
  );
}

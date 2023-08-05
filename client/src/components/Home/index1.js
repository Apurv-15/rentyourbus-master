import React from "react";
import "./index1.css";
import videobg from "../images/Homepagebg.mp4";
import { Link } from "react-router-dom";
const index1 = () => {
  return (
    <section className="showcase">
      <video src={videobg} muted loop autoPlay />
      <div className="overlay"></div>
      <div className="text">
        <h2>Reserve Your Private Bus</h2>
        <h3>Create Lasting Memories</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        {/* Use the Link component for navigation */}
        <Link to="/home">Reserve Now</Link>
      </div>
    </section>
  );
};

export default index1;

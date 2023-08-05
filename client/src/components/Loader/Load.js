// Loader.js

import React from "react";
import "./Load.css";

const Loader = () => {
  return (
    <div className="preloader-wrap">
      <div className="preloader">
        <div className="loading-circle loading-circle-one"></div>
        <div className="loading-circle loading-circle-two"></div>
        <div className="loading-circle loading-circle-three"></div>
      </div>
    </div>
  );
};

export default Loader;

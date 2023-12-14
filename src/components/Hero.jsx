import React from "react";
import "./Hero.css";
import Crypto from "../assets/hero-img.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <p>Buy & Sell Crypto 24/7 using your retirement account</p>
        <h1>Invest In Cryptocurrency with Your IRA</h1>
        <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
        <form action="">
          <input type="text" placeholder="Enter your email" />
          <button type="submit" className="btn">
            Learn More
          </button>
        </form>
      </div>
      <div className="right">
        <img src={Crypto} alt="" />
      </div>
    </div>
  );
};

export default Hero;

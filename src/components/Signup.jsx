import React from "react";
import Trade from "../assets/trade.png";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup">
      <div className="left">
        <img src={Trade} alt="" />
      </div>
      <div className="right">
        <h2>Earn passive income with crypto.</h2>
        <p>
          Earn up to 12% annual rewards on 30+ digital assets. Simply hold your
          assets in the app to automatically earn rewards at the end of each
          month with no lockups and no limits.
        </p>
        <form action="">
          <input type="text" placeholder="Enter your email" />
          <button type="submit" className="btn">
            Learn More
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

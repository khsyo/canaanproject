import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="homepage">
      <div className="homepage__hero-banner" />
      <div className="homepage__text-container">
        <h2 className="homepage__text-container--primary-text">
          煩惱什麼公司願意聘請外國人嗎？
        </h2>
        <h4 className="homepage__text-container--secondary-text">
          立即了解更多
        </h4>
      </div>
      <div className="homepage__cta-box u-center-text">
        <button className="btn">
          <Link to="/register">註冊</Link>
        </button>{" "}
        <button className="btn btn-general">登入</button>
      </div>
    </div>
  );
};

export default Landing;

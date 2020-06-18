import React from "react";
import Slider from "react-slick";
// import "./SlideComponent.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReactSlickDemo = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slick-container">
      <Slider {...settings}>
        <div>
          <div className="location">
            <i className="fas fa-compass" />
            公司地址
          </div>

          <div className="website">
            <i className="fas fa-globe" />
            公司網站
          </div>
        </div>
        <div>
          <div>公司使命~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</div>
        </div>
      </Slider>
    </div>
  );
};

export default ReactSlickDemo;

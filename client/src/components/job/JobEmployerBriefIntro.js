import React, { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const JobEmployerBriefIntro = ({ job }) => {
  const { image, name, location, website, mission } = job.employeruser;
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
  };
  return (
    <Fragment>
      {job && (
        <Fragment>
          <div className="job-employer-brief-intro__wrapper">
            <div className="job-employer-brief-intro__container">
              <div className="job-employer-brief-intro__container--top">
                <div className="job-employer-brief-intro__logo">
                  <img src={image} alt={name} />
                </div>
                <div className="right">
                  <div className="job-employer-brief-intro__info-wrapper--name">
                    <h3>{name}</h3>
                  </div>
                  {(location || website) && (
                    <div className="job-employer-brief-intro__info-wrapper--contact">
                      {location && (
                        <div className="location">
                          <i className="fas fa-compass" />
                          {location}
                        </div>
                      )}
                      {website && (
                        <div className="website">
                          <i className="fas fa-globe" />
                          <a href={website} target="_blank">
                            公司網站
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="job-employer-brief-intro__container--bottom">
                {mission && (
                  <div className="job-employer-brief-intro__mission-wrapper">
                    {mission}
                  </div>
                )}
              </div>

              {/* <div className="job-employer-brief-intro__info-wrapper">
                <div className="slick-container">
                  <Slider {...settings}>
                    {(location || website) && (
                      <div className="job-employer-brief-intro__info-wrapper--contact">
                        {location && (
                          <div className="location">
                            <i className="fas fa-compass" />
                            {location}
                          </div>
                        )}
                        {website && (
                          <div className="website">
                            <i className="fas fa-globe" />
                            {website}
                          </div>
                        )}
                      </div>
                    )}
                    {mission && (
                      <div className="job-employer-brief-intro__mission-wrapper">
                        {mission}
                      </div>
                    )}
                  </Slider>
                </div>
              </div> */}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default JobEmployerBriefIntro;

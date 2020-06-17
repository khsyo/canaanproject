import React, { Fragment } from "react";

const JobEmployerBriefIntro = ({ job }) => {
  const { image, name, location, website } = job.employeruser;
  console.log(website);
  return (
    <Fragment>
      {job && (
        <Fragment>
          <div className="job-employer-brief-intro__wrapper">
            <div className="job-employer-brief-intro__container">
              <div className="job-employer-brief-intro__logo">
                <img src={image} alt={name} />
              </div>
              <div className="job-employer-brief-intro__info-wrapper">
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
                        {website}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default JobEmployerBriefIntro;

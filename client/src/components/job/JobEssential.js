import React, { Fragment } from "react";
import PropTypes from "prop-types";

const JobEssential = ({ job }) => {
  const {
    employeruser: { name, location },
    title,
    salary,
    type,
    skills,
    workingHours,
    requiredNumber,
    ctaLink,
  } = job;
  return (
    <Fragment>
      <div className="job__basic-wrapper">
        <div className="job__basic-container">
          <div className="job__header">
            <h2 className="title">{title}</h2>
            <p className="employer-location">{`${name} | ${location}`}</p>
          </div>
          <div className="job__basic-description">
            {salary && (
              <div className="row">
                <h4>薪資</h4>
                <div className="job__basic-description--salary">{salary}</div>
              </div>
            )}
            {type && (
              <div className="row">
                <h4>工作類型</h4>
                <div className="job__basic-description--type">{type}</div>
              </div>
            )}
            {title && (
              <div className="row">
                <h4>職能</h4>
                <div className="job__basic-description--title">{title}</div>
              </div>
            )}
            {workingHours && (
              <div className="row">
                <h4>工作時間</h4>
                <div className="job__basic-description--hour">
                  {workingHours}
                </div>
              </div>
            )}
            {requiredNumber && (
              <div className="row">
                <h4>需求人數</h4>
                <div className="job__basic-description--requiredNumber">
                  {requiredNumber}
                </div>
              </div>
            )}
            {skills && (
              <div className="row">
                <h4>技能需求</h4>
                <ul className="job__basic-description--skills">
                  {skills?.map((skill, index) => (
                    <li key={index} className="skill-box">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        {ctaLink && (
          <div className="cta__container">
            <div id="right" className="cta__container--right">
              <button className="btn cta-btn">
                <a href={ctaLink} target="_blank">
                  應徵
                </a>
              </button>
              <span>工作不等人，立即應徵！</span>
            </div>
          </div>
        )}
      </div>
      {ctaLink && (
        <div className="cta__container">
          <div className="cta__container--bottom">
            <button className="btn cta-btn" href={ctaLink} target="_blank">
              應徵
            </button>
            <span>工作不等人，立即應徵！</span>
          </div>
        </div>
      )}
    </Fragment>
  );
};

JobEssential.propTypes = {
  job: PropTypes.object.isRequired,
};

export default JobEssential;

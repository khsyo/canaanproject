import React from "react";
import PropTypes from "prop-types";

const JobEssential = ({ job }) => {
  const {
    employeruser: { name, location },
    title,
    salary,
    type,
    skills,
  } = job;
  return (
    <div className="job__basic-container">
      <div className="job__header">
        <h1 className="job__title">{title}</h1>
        <span className="job__employer-location">
          {`${name} | ${location}`}
        </span>
      </div>
      <div className="job__basic-description">
        <div className="job__basic-description--salary">{salary}</div>
        <div className="job__basic-description--type">{type}</div>
        <div className="job__basic-description--title">{title}</div>
        <div className="job__basic-description--skills">
          {skills?.map((skill) => (
            <div className="skill">{skill}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

JobEssential.propTypes = {
  job: PropTypes.object.isRequired,
};

export default JobEssential;

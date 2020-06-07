import React, { Fragment } from "react";
import PropTypes from "prop-types";

const JobDescription = ({
  employeruser: { name, location },
  title,
  salary,
  type,
  skills,
}) => {
  return (
    <div className="job__basic-container">
      <div className="job__header">
        <h2 className="job__title">{title}</h2>
        <span className="job__employer-location">
          {`${name} | ${location}`}
        </span>
      </div>
      <div className="job__basic-description">
        {salary && (
          <Fragment>
            <h3>薪資</h3>
            <div className="job__basic-description--salary">{salary}</div>
          </Fragment>
        )}
        {type && <div className="job__basic-description--type">{type}</div>}
        {title && <div className="job__basic-description--title">{title}</div>}
        <div className="job__basic-description--skills">
          {skills?.map((skill) => (
            <div className="skill">{skill}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

JobDescription.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  title: PropTypes.string,
  salary: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
};

export default JobDescription;

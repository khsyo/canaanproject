import React, { Fragment } from "react";
import PropTypes from "prop-types";

const JobDescription = ({ job }) => {
  const { description } = job;
  return (
    <div className="job__more-description--wrapper">
      <div className="job__more-description--container">
        {description && (
          <Fragment>
            {description.map((d, index) => (
              <div className="job__more-description--section">
                <h4 className="title">{d.title}</h4>
                <ul>
                  {d.short_description &&
                    d.short_description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                </ul>
              </div>
            ))}
          </Fragment>
        )}
      </div>
    </div>
  );
};

JobDescription.propTypes = {
  description: PropTypes.array,
};

export default JobDescription;

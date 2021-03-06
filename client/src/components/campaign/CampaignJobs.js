import React, { Fragment, useEffect } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllJobs } from "../../actions/jobs";

const CampaignJobs = ({ getAllJobs, job: { loading, jobs } }) => {
  useEffect(() => {
    getAllJobs();
  }, [getAllJobs]);
  return (
    <Fragment>
      {loading ? (
        "Loading"
      ) : (
        <Fragment>
          <div className="jobs__wrapper u-center-text">
            {/* Remove */}
            {/* <h2 className="jobs__title">參加企業 與 職缺</h2>
            <h5 className="jobs__secondary-title">
              應徵所有有興趣的職缺以完成報名
            </h5> */}
            {jobs ? (
              Object.entries(jobs).map((job, index) => (
                <div
                  className="jobs__employer-container u-center-container"
                  key={index}
                >
                  <div className="employer-info">
                    <h3>{job[0]}</h3>
                  </div>
                  <div className="job-container">
                    {job[1].map((j, index) => (
                      <div className="job-wrapper" key={index}>
                        <div className="content">
                          <h4 className="title">{j.title}</h4>
                          <p className="salary">{j.salary}</p>
                        </div>
                        <a
                          href={`/job/${j._id}`}
                          className="btn cta-btn"
                          target="_blank"
                        >
                          應徵
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <h3>No jobs found...</h3>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  job: state.job,
  employer: state.employer,
});

export default connect(mapStateToProps, { getAllJobs })(CampaignJobs);

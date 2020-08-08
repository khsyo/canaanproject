import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getJobById } from "../../actions/jobs";

import SlideComponent from "../layout/SlideComponent";
import Spinner from "../layout/Spinner";
import JobEssential from "../job/JobEssential";
import JobDescription from "../job/JobDescription";
import JobEmployerBriefIntro from "../job/JobEmployerBriefIntro";

export const CampaignJob = ({ getJobById, job: { loading, job }, match }) => {
  useEffect(() => {
    getJobById(match.params.id);
  }, [getJobById, match.params.id]);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          {job ? (
            <div className="job__wrapper">
              <div className="blank-box" />
              <div className="job__wrapper--container">
                <JobEssential job={job} />
                <JobDescription job={job} />
                <JobEmployerBriefIntro job={job} />
              </div>
            </div>
          ) : (
            "loading"
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

CampaignJob.propTypes = {
  getJobyById: PropTypes.func,
  job: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  job: state.job,
});

export default connect(mapStateToProps, { getJobById })(CampaignJob);

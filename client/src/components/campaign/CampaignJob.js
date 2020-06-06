import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getJobById } from "../../actions/jobs";

import Spinner from "../layout/Spinner";
import JobEssential from "../job/JobEssential";

export const CampaignJob = ({ getJobById, job: { loading, job }, match }) => {
  useEffect(() => {
    getJobById(match.params.id);
  }, [getJobById, match.params.id]);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>{job ? <JobEssential job={job} /> : "loading"}</Fragment>
      )}
    </Fragment>
  );
};

CampaignJob.propTypes = {
  getJobyById: PropTypes.func.isRequired,
  job: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  job: state.job,
});

export default connect(mapStateToProps, { getJobById })(CampaignJob);

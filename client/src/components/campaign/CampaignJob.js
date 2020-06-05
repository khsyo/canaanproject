import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getJobById } from "../../actions/jobs";

export const CampaignJob = ({ getJobById, job: { loading, job }, match }) => {
  useEffect(() => {
    getJobById(match.params.id);
  }, [getJobById, match.params.id]);
  return <div>JOB</div>;
};

CampaignJob.propTypes = {
  getJobyById: PropTypes.func.isRequired,
  job: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  job: state.job,
});

export default connect(mapStateToProps, { getJobById })(CampaignJob);

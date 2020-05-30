import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getEmployers } from "../../actions/employer";
import Spinner from "../layout/Spinner";

export const CampaignProvider = ({
  getEmployers,
  employer: { loading, employer },
}) => {
  useEffect(() => {
    getEmployers();
  }, [getEmployers]);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="employer-wrapper">
            {employer.length > 0 ? (
              employer.map((emp, index) => (
                <div key={index}>
                  <h3>{emp.name}</h3>
                </div>
              ))
            ) : (
              <h1>No employers found...</h1>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  employer: state.employer,
});

export default connect(mapStateToProps, { getEmployers })(CampaignProvider);

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
  const styled = {
    maxHeight: "84px",
    maxWidth: "112px",
  };
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="employer-wrapper">
            {employer.length > 0 ? (
              employer.map((emp, index) => (
                <div className="logo" key={index}>
                  <img style={styled} src={emp.image} alt={emp.name} />
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

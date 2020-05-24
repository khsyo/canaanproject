import React, { Fragment } from "react";
import CampaignProvider from "./CampaignProvider";
import CampaignDescription from "./CampaignDescription";
import CampaignSteps from "./CampaignSteps";
// import { connect } from 'react-redux'

export const CampaignPage = () => {
  return (
    <div>
      <Fragment>
        <CampaignProvider />
        <CampaignDescription />
        <CampaignSteps />
      </Fragment>
    </div>
  );
};

// const mapStateToProps = (state) => ({

// })

export default CampaignPage;

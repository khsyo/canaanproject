import React, { Fragment } from "react";
import CampaignProvider from "./CampaignProvider";
import CampaignDescription from "./CampaignDescription";
import CampaignSteps from "./CampaignSteps";
import CampaignJobs from "./CampaignJobs";
import HeroBanner from "../layout/HeroBanner";
// import { connect } from 'react-redux'

export const CampaignPage = () => {
  return (
    <div>
      <Fragment>
        <HeroBanner />
        <CampaignProvider />
        <CampaignDescription />
        <CampaignSteps />
        <CampaignJobs />
      </Fragment>
    </div>
  );
};

// const mapStateToProps = (state) => ({

// })

export default CampaignPage;

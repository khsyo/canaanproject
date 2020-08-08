import React, { Fragment } from "react";

const CampaignDescription = () => {
  return (
    <Fragment>
      <div className="description__wrapper">
        <h2 className="description__title">2020 東南亞人才線上聯合招募</h2>
        <p className="description__paragraph">
          <span>The Canaan Project 一個專屬僑外生的求職社群平台</span>
          <span>
            首波連結台灣優質企業，提供從餐飲、行銷、設計到工程等熱門職缺
          </span>
          <span>歡迎應屆畢業生或是想要轉職的你一起來應徵</span>
          {/* <br />
          <span>一次 10 分鐘，輪流與各家老闆、主管面對面</span>
          <span>一天之內，海內外優質工作全部到位！</span> */}
        </p>

        {/* Remove */}
        {/* <div className="description__deadline u-center-text">
          <div className="left">
            <h3>10th</h3>
            <span>June</span>
          </div>
          <div className="right">
            <h3>09:00</h3>
            <p>上午</p>
          </div>
        </div> */}
      </div>
    </Fragment>
  );
};

export default CampaignDescription;

import React, { Fragment } from "react";

const CampaignDescription = () => {
  return (
    <Fragment>
      <div className="description__wrapper">
        <h2 className="description__title">
          快速面試1x家正在尋找外國人才的企業
        </h2>
        <p className="description__paragraph">
          <span>從台灣、日本到新加坡</span>
          <span>從物聯網、旅遊新創到敏捷顧問公司</span>
          <span>從潛力獨角獸、電信巨擘到紐交所上市企業</span>
          <br />
          <span>一次 10 分鐘，輪流與各家老闆、主管面對面</span>
          <span>一天之內，海內外優質工作全部到位！</span>
        </p>

        <div className="description__deadline u-center-text">
          <div className="left">
            <h3>10th</h3>
            <span>June</span>
          </div>
          <div className="right">
            <h3>09:00</h3>
            <p>上午</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CampaignDescription;

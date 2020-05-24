import React, { Fragment } from "react";

const CampaignSteps = () => {
  const steps = [
    {
      title: "企業審核",
      description:
        "徵才企業閱讀履歷進行審核，並由 Meet.jobs 安排面試（行前通知將在 1 月 2 日寄出）。",
    },
    {
      title: "現場面試",
      description:
        "活動當天與企業進行面試，或與其他與會企業的自由交流。 Meet.jobs 安排面試（行前通知將在 1 月 2 日寄出）。",
    },
    {
      title: "回報錄取",
      description: "順利就職者，回到 Meet.jobs 領取 100 美元獎金。",
    },
    {
      title: "應徵",
      description:
        "瀏覽參與快速面試的職缺，並在 Meet.jobs 上投遞履歷以完成報名。",
    },
  ];
  return (
    <Fragment>
      <div className="steps__wrapper u-center-container u-center-text">
        <h2 className="steps__title">快速面試怎麼玩?</h2>
        {steps ? (
          <div className="steps__section">
            {steps.map((step, index) => (
              <div className="steps__step">
                <div className="number">{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <h3>Loading the steps</h3>
        )}
      </div>
    </Fragment>
  );
};

export default CampaignSteps;

import { useState, useEffect } from "react";
import { Statistics } from "./Statistics";
import { FeedbackOptions } from "./FeedbackOptions";

export const Reviews = ({ good, neutral, bad }) => {
  const [goodCount, setGoodCount] = useState(good);
  const [neutralCount, setNeutralCount] = useState(neutral);
  const [badCount, setBadCount] = useState(bad);

  const onGood = () => {
    setGoodCount((prevGoodCount) => prevGoodCount + 1);
  };

  const onNeutral = () => {
    setNeutralCount((prevNeutralCount) => prevNeutralCount + 1);
  };

  const onBad = () => {
    setBadCount((prevBadCount) => prevBadCount + 1);
  };

  const countTotalFeedback = () => {
    return goodCount + neutralCount + badCount;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total === 0) return 0;
    return Math.round((goodCount / total) * 100);
  };

  const options = ["good", "neutral", "bad"];

  return (
    <>
      <FeedbackOptions onGood={onGood} onNeutral={onNeutral} onBad={onBad} />
      <Statistics
        good={goodCount}
        neutral={neutralCount}
        bad={badCount}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </>
  );
};

import { useState, useContext, createContext } from "react";
import { Statistics } from "./Statistics";
import { FeedbackOptions } from "./FeedbackOptions";
import { ReviewsContext } from "../App";

export const FeedbackContext = createContext();
export const StatisticsContext = createContext();

export const Reviews = () => {
  const { good, bad, neutral } = useContext(ReviewsContext);

  const [goodCount, setGoodCount] = useState(good);
  const [neutralCount, setNeutralCount] = useState(neutral);
  const [badCount, setBadCount] = useState(bad);

  const onGood = () => setGoodCount((prev) => prev + 1);
  const onNeutral = () => setNeutralCount((prev) => prev + 1);
  const onBad = () => setBadCount((prev) => prev + 1);

  const countTotalFeedback = () => goodCount + neutralCount + badCount;

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((goodCount / total) * 100);
  };

  return (
    <>
      <FeedbackContext.Provider value={{ onGood, onNeutral, onBad }}>
        <FeedbackOptions />
      </FeedbackContext.Provider>

      <StatisticsContext.Provider
        value={{
          goodCount,
          neutralCount,
          badCount,
          total: countTotalFeedback(),
          positivePercentage: countPositiveFeedbackPercentage(),
        }}
      >
        <Statistics />
      </StatisticsContext.Provider>

      {/* <Statistics
        good={goodCount}
        neutral={neutralCount}
        bad={badCount}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      /> */}
    </>
  );
};

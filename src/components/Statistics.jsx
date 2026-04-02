import { useContext } from "react";
import { StatisticsContext } from "./Reviews";

export const Statistics = () => {
  const { goodCount, neutralCount, badCount, total, positivePercentage } =
    useContext(StatisticsContext);
  return (
    <>
      <h1 style={{ color: "black" }}>statistics</h1>
      <h3>good: {goodCount}</h3>
      <h3>neutral: {neutralCount}</h3>
      <h3>bad: {badCount}</h3>
      <h2>total: {total}</h2>
      <h2>positive feedback: {positivePercentage} %</h2>
    </>
  );
};

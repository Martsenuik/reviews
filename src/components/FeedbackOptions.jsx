import { useContext } from "react";
import { FeedbackContext } from "./Reviews";

export const FeedbackOptions = () => {
  const { onGood, onBad, onNeutral } = useContext(FeedbackContext);
  return (
    <>
      <h1 style={{ color: "black" }}>Please leave feedback</h1>
      <button onClick={onGood}>good</button>
      <button onClick={onNeutral}>neutral</button>
      <button onClick={onBad}>bad</button>
    </>
  );
};

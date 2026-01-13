export const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
  return (
    <>
      <h1 style={{ color: "black" }}>please leave feedback</h1>
      <button onClick={onGood}>good</button>
      <button onClick={onNeutral}>neutral</button>
      <button onClick={onBad}>bad</button>
    </>
  );
};

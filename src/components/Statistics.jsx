export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <h1 style={{ color: "black" }}>statistics</h1>
      <h3>good: {good}</h3>
      <h3>neutral: {neutral}</h3>
      <h3>bad: {bad}</h3>
      <h2>total: {total}</h2>
      <h2>positive feedback: {positivePercentage} %</h2>
    </>
  );
};

import { Reviews } from "./components/Reviews";
import { createContext } from "react";

export const ReviewsContext = createContext();

function App() {
  return (
    <>
      {/* <Reviews good={0} neutral={0} bad={0} />  - запис пропсами*/}

      <ReviewsContext.Provider value={{ good: 0, neutral: 0, bad: 0 }}>
        <Reviews />
      </ReviewsContext.Provider>
    </>
  );
}

export default App;

//TODO: STEP 1 - Import the useState hook.
import React from "react";
import "./App.css";
import Scoreboard from "./components/scoreboard";
import Count from "./components/count";

function App() {
  return (
    <div>
      <Scoreboard />
      <Count />
    </div>
  );
}
export default App;

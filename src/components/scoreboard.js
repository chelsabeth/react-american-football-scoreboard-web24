import BottomRow from "../BottomRow";
import React,  { useState } from "react";


function Scoreboard() {

  const [count, setCount] = useState(0);
  const [countAway, setCountAway] = useState(0); 

  return (
      <div className="container">
        <section className="scoreboard">
          <div className="topRow">
            <div className="home">
              <h2 className="home__name">Lions</h2>
  
              {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
  
              <div className="home__score">{count}</div>
            </div>
            <div className="timer">00:03</div>
            <div className="away">
              <h2 className="away__name">Tigers</h2>
              <div className="away__score">{countAway}</div>
            </div>
          </div>
          <BottomRow />
        </section>
      </div>
    );
};

export default Scoreboard;

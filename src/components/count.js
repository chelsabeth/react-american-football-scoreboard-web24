import React, { useState } from "react";

function Count() {

    const [count, setCount] = useState(0);
    const [countAway, setCountAway] = useState(0); 

    return (
        <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setCount(count + 7)}> Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setCount(count + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setCountAway(countAway + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setCountAway(countAway + 3)}>Away Field Goal</button>
        </div>
      </section>
    );
};

export default Count;
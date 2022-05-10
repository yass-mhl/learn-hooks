import React, { useState } from "react";

const FuctionState = () => {

  const [counter, setCounter] = useState(0)

  const addOne = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  return (
    <div>
      <p>Function State: {counter} </p>
      <button onClick={addOne}>State dans Function</button>
    </div>
  )
}

export default FuctionState;

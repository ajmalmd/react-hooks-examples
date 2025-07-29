import React, { useMemo, useState } from "react";

function expensiveCalculation(num) {
  console.log("Calculating...");
  let total = 0;
  for (let i = 0; i < 100000000; i++) {
    total += i;
  }
  return total;
}

const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  const [dummy, setDummy] = useState(false);

  // // without useMemo
  // // recalculates every rerenders
  // const expensiveValue = expensiveCalculation(count);

  // with useMemo
  // recalculates when count state changes not dummy state changes
  const expensiveValue = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  return (
    <div>
      <h2>Expensive Value: {expensiveValue}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h2>Count:{count}</h2>
      <button
        onClick={() => {
          setDummy(!dummy);
          console.log(dummy);
        }}
      >
        Toggle Dummy
      </button>
    </div>
  );
};

export default UseMemoExample;

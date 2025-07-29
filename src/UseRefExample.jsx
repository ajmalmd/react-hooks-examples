import React, { useRef, useState } from "react";

const UseRefExample = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleRef = () => {
    countRef.current += 1;
  };

  console.log("UseRef Example Component", countRef.current); //Invokes when state changes not at ref change
  return (
    <>
      <button onClick={handleRef}>Ref change</button>
      <br />
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increment Count
      </button>
    </>
  );
};

export default UseRefExample;

import { useCallback } from "react";
import { useState } from "react";
import Second from "./Second";

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const handleMessage = useCallback((val) => {
    console.log("val from Second (child)", val);
  }, []);
  return (
    <>
      <div>
        <h1>Count 1: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment Count 1</button>
        <Second sendMessage={handleMessage} num={1} c={count} />
      </div>
      <div>
        <h1>Count 2: {count2}</h1>
        <button onClick={() => setCount2(count2 + 1)}>Increment Count 2</button>
        <Second sendMessage={handleMessage} num={2} c={count2} />
      </div>
      <div>
        <h1>Count 3: {count3}</h1>
        <button onClick={() => setCount3(count3 + 1)}>Increment Count 3</button>
        <Second sendMessage={handleMessage} num={3} c={count3} />
      </div>
    </>
  );
};

export default UseCallbackExample;

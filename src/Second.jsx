import React from 'react';

const Second = React.memo(({ sendMessage, num, c }) => {
  console.log("Child rendered, Child", num);

  return (
    <div style={{ border: "2px solid blue", padding: "10px", marginTop: "10px" }}>
      <h3>Child Component {num}</h3>
      <h1>Current Count: {c}</h1>
      <button onClick={()=>sendMessage(num)}>Send message {num}</button>
    </div>
  );
});

export default Second;

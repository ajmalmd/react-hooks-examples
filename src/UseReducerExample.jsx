import React, { useReducer } from "react";

const initialState = { name: "", email: "" };

function formReducer(state, action) {
  switch (action.type) {
    case "update_form":
      return { ...state, [action.field]: action.value };
    case "reset_form":
      return initialState;
    default:
      return state;
  }
}
const UseReducerExample = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "update_form",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleReset = () => {
    dispatch({ type: "reset_form" });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={state.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <br />
      <input
        type="email"
        name="email"
        value={state.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <br />
      <button onClick={handleReset}>Reset</button>
      <br />
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default UseReducerExample;

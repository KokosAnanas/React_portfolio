// import Box from "@mui/material/Box";
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "name":
      return {
        ...state,
        name: action.name,
      };
    case "surname":
      return {
        ...state,
        surname: action.surname,
      };
    case "agreement":
      return {
        ...state,
        checked: action.agreement,
      };
    default:
      throw Error("Unknown action: " + action.type);
  }
}

export default function Form() {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    surname: "",
    checked: false,
  });

  const handleInput = (e) => {
    dispatch({ type: "name", name: e.target.value });
  };

  const handleCheckbox = (e) => {
    dispatch({ type: "agreement", agreement: e.target.checked });
  };

  const handleSurnameInput = (e) => {
    dispatch({ type: "surname", surname: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">Ваше имя:</label>
        <input id="name" onChange={(e) => handleInput(e)} value={state.name} />
        <label htmlFor="surname">Ваша фамилия:</label>
        <input
          id="surname"
          onChange={(e) => handleSurnameInput(e)}
          value={state.surname}
        />
        <input
          type="checkbox"
          checked={state.checked}
          onChange={(e) => handleCheckbox(e)}
        />
        <button type="submit">Отправить</button>
      </form>
    </>
  );
}

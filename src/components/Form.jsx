/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import styles from "../styles";

const API_URL = "https://tododrf.onrender.com/todos?format=json";

function Form({ getTodoData }) {
  const [state, setState] = useState({
    task: "",
  });

  /* handle change events for the input text */
  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  /* handle submit events for the input text */
  const handleSubmit = (e) => {
    e.preventDefault();

    /* Submit user data*/
    const userData = {
      task: state.task,
    };

    /* Send an Axios POST to the API endpoint*/
    axios.post(API_URL, userData).then(() => {
      /* Call the getTodoData function */
      getTodoData();
    });

    setState({
      task: "",
    });
  };

  return (
    <div className="pt-2">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-3">
          <input
            type="text"
            name="task"
            value={state.task}
            onChange={handleChange}
            className={`${styles.textInput}`}
          />

          <button className={`${styles.formBtn}`}>Send</button>
        </div>
      </form>
    </div>
  );
}

export default Form;

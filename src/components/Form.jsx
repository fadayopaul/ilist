/* eslint-disable react/prop-types */
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import styles from "../styles";

function Form({ setData }) {
  const [state, setState] = useState({
    task: "",
    completed: false,
  });

  /* Async function to get data from the api */
  const getTodoData = useCallback(async () => {
    await axios
      .get("https://tododrf.onrender.com/todos?format=json")
      .then((response) => {
        setData(response.data);
      });
  }, [setData]);

  useEffect(() => {
    getTodoData();
  }, [getTodoData]);

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
    axios
      .post("https://tododrf.onrender.com/todos?format=json", userData)
      .then((response) => {
        console.log(response);

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

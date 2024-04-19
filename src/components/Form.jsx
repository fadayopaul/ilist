/* eslint-disable react/prop-types */
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

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

  /**handle submit events for the input text */
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
      });

    /* Send an Axios POST to the API endpoint */
    getTodoData();

    setState({
      task: "",
    });
  };

  return (
    <div className="pt-5">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-5">
          <input
            type="text"
            name="task"
            value={state.task}
            onChange={handleChange}
            className="textInput focus:ring-none focus:border-primary focus:ring-primary w-full rounded-lg border-none"
          />

          <button className="bg-primary rounded-3xl px-6 py-2 font-primary text-white">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;

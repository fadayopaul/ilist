/* eslint-disable react/prop-types */
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
import styles from "../styles";

const API_URL = "https://tododrf.onrender.com/todos?format=json";

function Form({ getTodoData, setShow }) {
  const [task, setTask] = useState("");

  /* handle change events for the input text */
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  /* handle submit events for the input text */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task === "") {
      setShow((prev) => !prev);

      toast.error("Input field cannot be empty!");
      return;
    }

    try {
      axios.post(API_URL, { task }).then(() => {
        getTodoData(); //getTodoData is a function to fetch updated data
        toast.success("New Item added!");
      });

      setTask("");
    } catch (error) {
      console.error("Error adding new item:", error);
      toast.error("Failed to add new item. Please try again.");
    }
  };

  return (
    <div className="pt-2">
      <form id="form" onSubmit={handleSubmit}>
        <div className="flex gap-3">
          <input
            type="text"
            name="task"
            value={task}
            onChange={handleChange}
            className={`${styles.textInput}`}
          />

          <button type="submit" className={`${styles.formBtn}`}>
            Send
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
}

export default Form;

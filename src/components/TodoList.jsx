/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { TiDelete } from "react-icons/ti";
import { TbEdit } from "react-icons/tb";
import styles from "../styles";

const API_URL = "https://tododrf.onrender.com/todos";

function TodoList({ id, task, completed, getTodoData }) {
  const [isChecked, setIsChecked] = useState(completed);

  async function handleCheckboxChange() {
    try {
      const updateData = { completed: !isChecked };
      const response = await axios.put(
        `${API_URL}/${id}?format=json`,
        updateData,
      );
      setIsChecked((prevState) => !prevState);
      toast.success(`${task} item updated.`);
      console.log(response);
    } catch (error) {
      toast.error(error.message);
      console.error("Error updating todo item:", error);
    }
  }

  async function handleDelete() {
    try {
      const response = await axios.delete(`${API_URL}/${id}?format=json`);
      getTodoData(); // getTodoData is a function to fetch updated data
      toast.success(`${task} item deleted!`);
      console.log(response);
    } catch (error) {
      console.error("Error deleting todo item:", error);
      toast.error(`Failed to delete ${task} item. Please try again.`);
    }
  }

  return (
    <div className="py-2">
      <li className={`${styles.list}`}>
        <div className="flex items-center">
          <input
            className={`${styles.checkbox}`}
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />

          <label
            htmlFor="checkbox"
            className={`${isChecked ? "line-through opacity-50" : ""} pl-3 font-medium`}
          >
            {task}
          </label>
        </div>

        <div className="flex items-center gap-x-2">
          <button>
            <TbEdit size={23} className="cursor-pointer" />
          </button>

          <button className="cursor-pointer" onClick={handleDelete}>
            <TiDelete size={26} color="#F6A89E" />
          </button>
        </div>
      </li>
      <Toaster />
    </div>
  );
}

export default TodoList;

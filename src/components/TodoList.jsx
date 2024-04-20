/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { TiDelete } from "react-icons/ti";
import { TbEdit } from "react-icons/tb";
import { GrDocumentUpdate } from "react-icons/gr";
import styles from "../styles";

const API_URL = "https://tododrf.onrender.com/todos";

function TodoList({ id, task, completed, getTodoData }) {
  const [isChecked, setIsChecked] = useState(completed);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task);

  async function handleCheckboxChange() {
    try {
      const updateData = setIsChecked((prev) => !prev);
      const response = await axios.patch(`${API_URL}/${id}`, {
        completed: updateData,
      });

      toast.success(`${task} item updated.`);
      console.log(response);
    } catch (error) {
      toast.error(error.message);
      console.error("Error updating todo item:", error.message);
    }
  }

  function handleEdit() {
    setIsEditing(true);
  }

  async function handleSaveEdit() {
    // If the edited text is the same as the original text, return early
    if (editText === task) {
      setIsEditing(false);
      toast.error("Same as the original");
      return;
    }

    try {
      const updateData = { task: editText };
      const response = await axios.patch(
        `${API_URL}/${id}?format=json`,
        updateData,
      );

      setIsEditing(false);
      getTodoData(); // Fetch updated data

      toast.success(`Task updated to '${editText}'`);
      console.log(response);
    } catch (error) {
      toast.error(error.message);
      console.error(`Error editing ${task}:`, error);
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
        <div className="flex items-center justify-evenly">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className={`${styles.checkbox}`}
          />

          {isEditing ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className=" ml-3 flex w-[100%] flex-wrap rounded-md border-2 border-primary px-2 py-1"
            />
          ) : (
            <label
              htmlFor="checkbox"
              className={`${isChecked ? "line-through opacity-50" : ""} pl-3 font-medium`}
            >
              {task}
            </label>
          )}
        </div>

        <div className="flex items-center gap-x-2">
          {isEditing ? (
            <button
              onClick={handleSaveEdit}
              className="ml-2 rounded-md bg-[#8CD4CB] px-3 py-1 text-white"
            >
              <GrDocumentUpdate />
            </button>
          ) : (
            <button onClick={handleEdit}>
              <TbEdit size={23} className="cursor-pointer" />
            </button>
          )}

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

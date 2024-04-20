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
  const [isLoading, setIsLoading] = useState(false);

  // NOTE: Function Functionality for the Checkbox

  async function handleCheckboxChange() {
    setIsLoading(true);

    try {
      await axios.patch(`${API_URL}/${id}?format=json`, {
        id,
        task,
        completed: !isChecked,
      });

      setIsChecked((prev) => !prev); // Update isChecked state immediately
      getTodoData(); // Fetch updated data
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
      toast.success(`${task} item updated.`);
    }
  }

  // NOTE: Function Functionality to allow Editing
  function handleEdit() {
    setIsEditing(true);
  }

  // NOTE: Function Functionality for the Saving Edit Changes
  async function handleSaveEdit() {
    // If the edited text is the same as the original text, return early
    if (editText === task) {
      setIsEditing(false);
      toast.error("Same as the original");
      return;
    }

    try {
      setIsLoading(true);

      await axios.patch(`${API_URL}/${id}?format=json`, { task: editText });

      setIsEditing(false);

      getTodoData(); // Fetch updated data
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
      toast.success(`Task updated to '${editText}'`);
    }
  }

  // NOTE: Function Functionality for the Deletion
  async function handleDelete() {
    try {
      setIsLoading(true);

      await axios.delete(`${API_URL}/${id}?format=json`);

      getTodoData(); // getTodoData is a function to fetch updated data
    } catch (error) {
      toast.error(`Failed to delete ${task} item.`);
    } finally {
      setIsLoading(false);
      toast.success(`${task} item deleted!`);
    }
  }

  return (
    <div className="py-2">
      <li className={`${styles.list}`}>
        <div
          className={`flex items-center justify-evenly ${isLoading ? "cursor-not-allowed" : "cursor-pointer"}`}
        >
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className={`${styles.checkbox}`}
            disabled={isLoading}
          />

          {isEditing ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className=" ml-3 flex w-[100%] flex-wrap rounded-md border-2 border-primary px-2 py-1"
              disabled={isLoading}
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
              disabled={isLoading}
              className={`ml-2 rounded-md bg-[#8CD4CB] px-3 py-1 text-white ${isLoading ? "cursor-not-allowed" : "cursor-pointer"}`}
            >
              <GrDocumentUpdate />
            </button>
          ) : (
            <button
              onClick={handleEdit}
              disabled={isLoading}
              className={`${isLoading ? "cursor-not-allowed" : "cursor-pointer"}`}
            >
              {!isChecked && <TbEdit size={23} />}
            </button>
          )}

          <button
            className={`${isLoading ? "cursor-not-allowed" : "cursor-pointer"}`}
            disabled={isLoading}
            onClick={handleDelete}
          >
            <TiDelete size={26} color="#F6A89E" />
          </button>
        </div>
      </li>
      <Toaster />
    </div>
  );
}

export default TodoList;

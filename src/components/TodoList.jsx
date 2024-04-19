/* eslint-disable react/prop-types */
import axios from "axios";

import { TiDelete } from "react-icons/ti";
import { TbEdit } from "react-icons/tb";
import styles from "../styles";
import { useState } from "react";

function TodoList(items) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange() {
    const newStatus = !isChecked;
    setIsChecked(newStatus);
  }

  async function handleDelete(id) {
    await axios
      .delete(`https://tododrf.onrender.com/todos/${id}`)
      .then((response) => {
        console.log(response, "Deleted successfully");
      });
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
            {items.task}
          </label>
        </div>

        <div className="flex items-center gap-x-2">
          <TbEdit size={23} className="cursor-pointer" />
          <button
            className="cursor-pointer"
            onClick={() => handleDelete(items.id)}
          >
            <TiDelete size={26} />
          </button>
        </div>
      </li>
    </div>
  );
}

export default TodoList;

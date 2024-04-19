import { TiDelete } from "react-icons/ti";
import { TbEdit } from "react-icons/tb";
import styles from "../styles";

function TodoList(items) {
  return (
    <div className="py-2">
      <li className={`${styles.list}`}>
        <div className="flex items-center">
          <input type="checkbox" className={`${styles.checkbox}`} />
          <label className="pl-3 font-medium">{items.task}</label>
        </div>

        <div className="flex items-center gap-x-2">
          <TbEdit size={23} className="cursor-pointer" />
          <TiDelete size={26} className="cursor-pointer" />
        </div>
      </li>
    </div>
  );
}

export default TodoList;

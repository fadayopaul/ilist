import { TiDelete } from "react-icons/ti";
import { TbEdit } from "react-icons/tb";

function TodoList(items) {
  return (
    <div className="py-2">
      <li className="list flex items-center justify-between p-2">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="checkbox focus:ring-primary peer cursor-pointer rounded-md border-gray-300 text-green-400"
          />
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

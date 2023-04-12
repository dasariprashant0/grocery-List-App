import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ data, handleCheck, handleDelete }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        onChange={() => handleCheck(data.id)}
        checked={data.checked}
      />
      <label
        onDoubleClick={() => handleCheck(data.id)}
        style={data.checked ? { textDecoration: "line-through" } : null}
      >
        {data.item}
      </label>
      <FaTrashAlt
        onClick={() => handleDelete(data.id)}
        role="button"
        tabIndex={"0"}
        aria-label={`Delete ${data.item}`}
      />
    </li>
  );
};

export default LineItem;

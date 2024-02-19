import React from "react";
import { X } from "react-feather";
import { useState } from "react";
import "./Editable.css";

function Editable(props) {
  const [showEdit, setShowEdit] = useState(false);

  const[inputValue,setInputValue]=useState(props.default || "");
  return (
    <div className="editable">
      {showEdit ? (
        <form
          className={`editable_edit ${props.editClass || ""}`}
          onSubmit={(event) => {
            event.preventDefault();
            if (props.onSubmit) props.onSubmit(inputValue);
            setShowEdit(false);
          }}
        >
          <input
            autoFocus
            type="text"
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
            placeholder={props.placeholder || "Enter item"}
          />
          <div className="editable_edit_footer">
            <button type="submit">{props.buttonText || "Add"}</button>
            <X onClick={() => setShowEdit(false)} />
          </div>
        </form>
      ) : (
        <p
          className={`editable_display ${props.displayClass || ""}`}
          onClick={() => setShowEdit(true)}
        >
          {props.text || "Add item "}
        </p>
      )}
    </div>
  );
}
export default Editable;

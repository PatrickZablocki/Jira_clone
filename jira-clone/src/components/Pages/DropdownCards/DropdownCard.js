import React, { useEffect, useRef } from "react";

function DropdownCard(props) {
  const dropdownRef = useRef();

const handleClick = (event) => {
    if (dropdownRef && !dropdownRef?.current.contains(event?.target))
        props.onClose && props.onClose();
};

useEffect(() => {
    document.addEventListener("click", handleClick,{capture:true});

    return () => {
        document.removeEventListener("click", handleClick, {capture:true});
    };
});
  return (
    <div ref={dropdownRef} className="dropdown"
    style={{
        position: "absolute",
        top:"100%",
        right: "0",
    }}
    >
      {props.children}
    </div>
  );
}
export default DropdownCard;

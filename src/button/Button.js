import React from "react";
import "./button.css";

export const Button = (props, onClick) => {
  const onClickButton = event => {
    onClick();
  };

  return (
    <button onClick={onClickButton} className="button-input">
      {props.children}
    </button>
  );
};

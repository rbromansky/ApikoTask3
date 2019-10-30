import React, { useState, Fragment } from "react";
import T from "prop-types";

import "./button.css";

export const Search = ({ onSearch }) => {
  const [value, setInputValue] = useState("");
  const onChange = event => setInputValue(event.target.value);

  const isNumber = n => {
    return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
  };

  const onClick = event => {
    event.preventDefault();
    setInputValue("");

    if (isNumber(value) && Number(value) > 0 && Number(value) < 501) {
      onSearch(Number(value));
    } else {
      alert("Out of range");
    }
  };

  return (
    <Fragment>
      <input
        className="button-input"
        placeholder="Input page 1...500"
        {...{ value }}
        onChange={onChange}
      />
      <button className="button-input" onClick={onClick}>
        Go
      </button>
    </Fragment>
  );
};

Search.protoTypes = {
  onSearch: T.func.isRequired
};

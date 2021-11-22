import React, { useState } from "react";
import "./style.css";

export default function Radio(props) {
  const { className, label, onChange, value, check, use } = props;
  const classes = ["hidden-input", className].filter(Boolean).join(" ");
  //const [status, setStatus] = useState(checked)
  const checked = check === value;
  return (
    <>
      <label>
        <input
          className={classes}
          id='button'
          type='radio'
          onChange={onChange}
          value={value}
          checked={checked}
        />
        {use === "color" ? (
          <span
            className='button-label-color'
            style={{
              background: value,
            }}
          ></span>
        ) : (
          <span className='button-label'> {label} </span>
        )}
      </label>
    </>
  );
}

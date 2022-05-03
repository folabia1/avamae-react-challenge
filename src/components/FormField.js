import React from "react";

export function FormField(props) {
  return (
    <div className="FormField">
      <label htmlFor={props.name}>{props.name
        .replace(/[A-Z]|\d+/g, " $&")
        .replace(/^[a-z]/, (match) => match.toUpperCase())}
      </label>
      {props.subText ? <p className="subText">{props.subText}</p> : null}
      <input 
        id={props.name}
        name={props.name}
        label="Full Name"
        type={props.type}
        value={props.value}
        onChange={(event) => props.onChange(props.name, event.target.value)}
      />
    </div>
  )
}
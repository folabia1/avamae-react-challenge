import React from "react";

export function FormField(props) {
  return (
    <div className="FormField">
      <div className="label-and-sub">
        <label htmlFor={props.name}>
          {props.name
            .replace(/[A-Z]|\d+/g, (match) => " " + match.toLowerCase())
            .replace(/\/[a-z]/g, (match) => match.toUpperCase())
            .replace(/^[a-z]|/, (match) => match.toUpperCase())}
          {props.optional ? (
            <span className="optional"> - optional</span>
          ) : null}
        </label>
        {props.subText ? <p className="subtext">{props.subText}</p> : null}
      </div>
      {props.type === "textarea" ? (
        <textarea
          id={props.name}
          name={props.name}
          label="Full Name"
          type={props.type}
          value={props.value}
          onChange={(event) => props.onChange(props.name, event.target.value)}
        />
      ) : (
        <input
          id={props.name}
          name={props.name}
          label="Full Name"
          type={props.type}
          value={props.value}
          onChange={(event) => props.onChange(props.name, event.target.value)}
        />
      )}
    </div>
  );
}

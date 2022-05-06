import React, { useEffect, useContext, useRef } from "react";
import { FieldRefsContext } from "./ContactUsForm";

export function FormField(props) {
  const { setFieldRefs } = useContext(FieldRefsContext);
  const fieldRef = useRef(null);

  useEffect(() => {
    // on mount
    setFieldRefs((prevFieldRefs) => {
      return { ...prevFieldRefs, [props.name]: fieldRef };
    });
    // on unmount
    return () => {
      setFieldRefs((prevFieldRefs) => {
        delete prevFieldRefs[props.name];
        return prevFieldRefs;
      });
    };
  }, [fieldRef, props.name, setFieldRefs]);

  return (
    <div className="FormField">
      <div className="label-and-sub">
        <label htmlFor={props.name}>
          {/* add a space between words */}
          {props.name.replace(/[A-Z]|\d+|\//g, (match) => " " + match)}
          {props.optional && <span className="optional"> - optional</span>}
        </label>
        {props.subText && <p className="subtext">{props.subText}</p>}
      </div>
      {props.type === "textarea" ? (
        <textarea
          id={props.name}
          name={props.name}
          label="Full Name"
          ref={fieldRef}
          type={props.type}
          value={props.value}
          onChange={(event) => props.onChange(props.name, event.target.value)}
        />
      ) : (
        <input
          id={props.name}
          name={props.name}
          label="Full Name"
          ref={fieldRef}
          type={props.type}
          value={props.value}
          onChange={(event) => props.onChange(props.name, event.target.value)}
        />
      )}
    </div>
  );
}

import React from "react";

export default function Container(props) {
  return (
    <div
      className={`container p-8 mx-auto px-16 ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

import React from "react";
import "./Test.css";

function Test(props) {
  const { body, title } = props;
  return (
    <>
      <div className="subtitle">{title}</div>
      <div className="body">{body}</div>
    </>
  );
}
export default Test;

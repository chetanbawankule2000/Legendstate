import React, { useState, useRef } from "react";

const Login = () => {
  const renderCount = ++useRef(0).current;
  const [firstname, setFirstname] = useState("");
  const [secondName, setSecondName] = useState("");

  const name = firstname + " " + secondName;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>Renders: {renderCount}</div>
      <h3>Using usestate</h3>
      <h2>Hi {name}</h2>
      <div>First:</div>
      <input
        type={"text"}
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />
      <div>Last:</div>
      <input
        type={"text"}
        value={secondName}
        onChange={(e) => setSecondName(e.target.value)}
      />
    </div>
  );
};

export default Login;

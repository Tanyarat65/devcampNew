import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("Start Text");

  const onPasteFunc = (e) => {
    e.preventDefault();
    alert("Not allow to paste value");
  };

  return (
    <>
      <h1>{text}</h1>
      <input
        type="test"
        onPaste={onPasteFunc}
        onChange={(e) => setText(e.target.value || "Start Text")}
      />
    </>
  );
}

export default App;

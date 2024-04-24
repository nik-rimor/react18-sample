import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

function App() {
  const inputType = "number";
  const minValue = 5;
  return (
    <div>
      <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="Type your name"
      />
      <textarea
        autoFocus={true}
        cols={30}
        rows={10}
        spellCheck={true}
        style={{ backgroundColor: "gray" }}
      ></textarea>
    </div>
  );
}

root.render(
  <StrictMode>
    <div>
      <App />
    </div>
  </StrictMode>
);

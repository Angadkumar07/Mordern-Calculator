import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setDisplay("");
    } else if (value === "=") {
      try {
        setDisplay(eval(display));
      } catch {
        setDisplay("Error");
      }
    } else if (value === "←") {
      setDisplay(display.slice(0, -1));
    } else if (value === "%") {
      try {
        setDisplay((eval(display) / 100).toString());
      } catch {
        setDisplay("Error");
      }
    } else if (value === "√") {
      try {
        setDisplay(Math.sqrt(eval(display)).toString());
      } catch {
        setDisplay("Error");
      }
    } else if (value === "x²") {
      try {
        setDisplay(Math.pow(eval(display), 2).toString());
      } catch {
        setDisplay("Error");
      }
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="calculator">
      <h1 className="calculator-title">React Calculator</h1>
      <input
        className="display"
        type="text"
        value={display}
        readOnly
        placeholder="0"
      />
      <div className="buttons-container">
        {[
          "C",
          "←",
          "%",
          "/",
          "7",
          "8",
          "9",
          "*",
          "4",
          "5",
          "6",
          "-",
          "1",
          "2",
          "3",
          "+",
          "√",
          "0",
          ".",
          "=",
          "x²",
        ].map((btn, index) => (
          <button key={index} onClick={() => handleButtonClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;

// src/Calculator.jsx

import { useState } from 'react';
import './Calculator.css'; // Optional: for styling

function Calculator() {
  const [input, setInput] = useState("");
  
  const handleClick = (value) => {
    if (value === "=") {
      calculateResult();
    } else if (value === "C") {
      setInput("");
    } else {
      setInput(input + value);
    }
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString()); // Caution: `eval` can be risky with user input in real applications
    } catch (error) {
      setInput(error);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        {["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "C", "0", "=", "/"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;

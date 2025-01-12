import React, { useState } from "react";
const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function Colors() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [count, incrementCount] = useState(0)

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    incrementCount(count => count+1)
  };

  return (
    <div
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
      <p>{count}</p>
    </div>
  );
}

export default Colors;
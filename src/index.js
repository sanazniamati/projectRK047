import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Text, Circle } from "react-konva";

const App = () => {
  const circleRef = useRef();
  const [text, setText] = useState("");
  const handelOnClick = () => {
    alert("You clicked on the circle");
    setText("You clicked on the circle");
  };
  const handelOnClickBtn = () => {
    window.removeEventListener("handelOnClickBtn", handelOnClick);

    // setText("You remove onClick the circle");
  };

  return (
    <>
      <div id="buttons">
        <button id="removeClick" onClick={handelOnClickBtn}>
          Remove onclick
        </button>
      </div>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text
            text={text}
            x={10}
            y={10}
            fontSize={24}
            fontFamily={"Calibri"}
            fill={"black"}
          />
          <Circle
            x={150}
            y={150}
            radius={70}
            fill={"red"}
            stroke={"black"}
            strokeWidth={4}
            onClick={handelOnClick}
            ref={circleRef}
          />
        </Layer>
      </Stage>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

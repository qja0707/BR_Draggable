import { useState } from "react";

type draggableProps = {
  children: any;
};

function Draggable(props: draggableProps) {
  const [locationX, setLocationX] = useState(0);
  const [locationY, setLocationY] = useState(0);
  const [movementX, setMovementX] = useState(0);
  const [movementY, setMovementY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      style={{
        position: "absolute",
        left: locationX + movementX,
        top: locationY + movementY,
      }}
      onMouseMove={(e) => {
        console.log(e.currentTarget.clientLeft);
        if (isClicked) {
          setMovementX(e.clientX - mouseX);
          setMovementY(e.clientY - mouseY);
          console.log("move:", e.clientX - mouseX, e.clientY - mouseY);
        }
        // setLocationX(locationX + e.movementX);
      }}
      onMouseDown={(e) => {
        console.log("down");
        setIsClicked(true);
        setMouseX(e.clientX);
        setMouseY(e.clientY);
      }}
      onMouseUp={() => {
        setIsClicked(false);
        setLocationX(locationX + movementX);
        setLocationY(locationY + movementY);
        setMovementX(0);
        setMovementY(0);
      }}
      onMouseLeave={() => {
        setIsClicked(false);
        setLocationX(locationX + movementX);
        setLocationY(locationY + movementY);
        setMovementX(0);
        setMovementY(0);
      }}
    >
      {props.children}
    </div>
  );
}
export default Draggable;

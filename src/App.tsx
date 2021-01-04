import Draggable from "./Draggable";
import Box from "./Box";
import "./App.css";

function App() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Draggable>
        <Box style={{ width: 100, height: 100, backgroundColor: "pink" }} />
      </Draggable>
    </div>
  );
}

export default App;

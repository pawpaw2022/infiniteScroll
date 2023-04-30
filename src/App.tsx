/** @format */

import "./App.css";
import ImageList from "./components/CardList";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Guess how many cards do I have?</h1>
      <ImageList />
    </div>
  );
}

export default App;

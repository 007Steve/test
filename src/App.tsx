import React from "react";
import "./App.css";
import Sidebar from "./containers/Sidebar";
import MainContainer from "./containers/MainContainer";

function App() {
  return (
    <div className="App">
      <Sidebar
        imageOne="/dashboard-interface 1.svg"
        imageTwo="/shopping-list 1.svg"
        imageThree="/customer 1.svg"
      />
      <MainContainer />
    </div>
  );
}

export default App;

import React from "react";
import Head from "./components/Head";
import Foot from "./components/Foot";
import Main from "./components/Main";

function App() {
  return (
    <div id="hero" className="hero">
      <h1 className="title">Những việc cần làm</h1>
      <div id="todoApp" className="todo-app">
        {/* Head */}
        <Head />
        {/* Main */}
        <Main />
        {/* Foot */}
        <Foot />
      </div>
    </div>
  );
}

export default App;

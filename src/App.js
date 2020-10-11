import React from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import data from "./data";

function App() {
  return (
    <div className="app">
      {/* <h1 style={{ textAlign: "center" }}>TỔNG HỢP TIẾN ĐỘ SX &amp; LTSX BC</h1> */}
      <div className="app__body">
        <Dashboard datas={data}/>
        <Dashboard datas={data}/>
      </div>
    </div>
  );
}

export default App;

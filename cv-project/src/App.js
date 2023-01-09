import React, { Component } from "react";
import Educational from "./components/educational";
import Personal from "./components/personal";
import Professional from "./components/professional";
import Render from './components/pageRender';
import Parent from "./components/parent";


function App() {
  return (
    <div className="App">
      <div className="AppInside">
        <div className="personal"></div>
        <Personal/>
        <Parent/>
        <Professional/>
        <Render/>
      </div>

      <div className="Display">
        
      </div>
    </div>
  );
}

export default App;

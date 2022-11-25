// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform"
// import About from "./About";
import { useState } from "react";

function App() {
  const [mode,setmode]=useState('light');
  const[textMode,settextMode]=useState("Dark")
 const togglemode=()=>{
  if(mode==='dark'){
    setmode('light');
    document.body.style.backgroundColor='white';
    settextMode("Dark")
  }
  else{
    setmode('dark')
    document.body.style.backgroundColor='grey'
    settextMode("Light")

  }
 }
  return (
    <>
      <Navbar title="SRAVANTHI" about="ABOUT US" mode={mode} togglemode={togglemode} textMode={textMode}
      />
      <div className="container my-3">
        <Textform heading="Enter your text" mode={mode}  />
 {/* <About />*/}
      </div>
    </>
  );
}

export default App;

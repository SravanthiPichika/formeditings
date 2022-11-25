import React from "react";
import { useState } from "react";
function Textform(props) {
  const [text, settext] = useState("Enter your text");
  //text="bsou n"-wrong way
  //settext=("cac")- correect way
  let newtext = text.toUpperCase();
  const handleClick = () => {
    //alert("uppercase was clicked!");
    settext(newtext);
  };
  let newLtext = text.toLowerCase();
  const handleLClick = () => {
    //alert("uppercase was clicked!");
    settext(newLtext);
  };

  // let clearText='';
  const handleClear=()=>{
    settext(" ");
  }

  const handleOnchange = (event) => {
    //console.log("chnge");
    settext(event.target.value);
  };

  const handleCopy=()=>{
  var text=document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  };

  const handleXtraspace = () => {
    let newXtext=text.trim().split(/ +/).join(' ');
    settext(newXtext);
  };
  return (
    <>
      <div className="container" style={{ color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3" >
          <label className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="3" style={{
              backgroundColor:  props.mode==='dark'?'grey':'white',
              color: props.mode==='dark'?'white':'black'
              
             }}
            onChange={handleOnchange}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleClick}>
          Convert to upper case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLClick}>
          Convert to lower case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleXtraspace}>
          HandleXtraspace
        </button>
      </div>
      <div className="container my-3" style={{color:  props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length } words and {text.length}characters</p>
        <h2>Preview :</h2> {text}
      </div>
    </>
  );
}

export default Textform;

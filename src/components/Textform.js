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
  const handleOnchange = (event) => {
    //console.log("chnge");
    settext(event.target.value);
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="3"
            onChange={handleOnchange}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleClick}>
          Convert to upper case
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLClick}>
          Convert to lower case
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split (" ").length } words and {text.length}characters</p>
        <h2>Preview :</h2> {text}
      </div>
    </>
  );
}

export default Textform;

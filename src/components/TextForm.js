import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
  };

  const handlespaces =()=>{
    let newtext = text.split(" ").filter((ele)=>{return ele.length!==0}).join(" ");
    setText(newtext);
    };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter the text here"
            value={text}
            onChange={handleOnChange}
            style={{color: props.mode==='dark'?'white':'black' , backgroundColor: props.mode==='dark'?'#042743':'white'}}
            id="myBox"
            rows="8"
          ></textarea>
          <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>
            Convert to UpperCase
          </button>
          <button
            className="btn btn-success my-2 mx-2"
            onClick={handleLowClick}
          >
            Convert to LowerCase
          </button>
          <button className="btn btn-warning my-3 mx-3" onClick={handlespaces}> Remove Spaces </button>
          <button className="btn btn-danger my-2 mx-2" onClick={handleClear}>
            {" "}
            CLEAR{" "}
          </button>
        </div>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Text Summary</h1>
        <p>
          {text.split(" ").filter((ele)=>{return ele.length!==0}).length} words , {text.split(" ").join('').length} charecters
        </p>
        <h2>Preveiw</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

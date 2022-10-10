import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase!','success');
  };

 const handleLoClick= ()=>{
  let newText= text.toLowerCase();
  setText(newText);
  props.showAlert('Converted to Lowercase!','success');
 }

const handleCopy=()=>{
  navigator.clipboard.writeText(text);
  document.getSelection().removeAllRanges();
  props.showAlert('Text Copied !','success')
}

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div>
        <div className="mb-3"  style={{color:props.mode==='dark'?'white':'black'}}>
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==='dark'?'#091d3b':'white',color:props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button className={`btn btn-${props.mode==='dark'?'secondary':'primary'} my-1`} disabled={text.length===0} onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className={`btn btn-${props.mode==='dark'?'secondary':'primary'} mx-2 my-1`} disabled={text.length===0} onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className={`btn btn-${props.mode==='dark'?'secondary':'primary'} mx-2 my-1`} disabled={text.length===0} onClick={handleCopy}>
         Copy Text
        </button>
      </div>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}} my-6>
       <h2>Your text summary</h2>
        <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to preview!'}</p>
      </div>
    </>
  );
}

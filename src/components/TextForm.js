import React, {useState} from 'react';


export default function TextForm(props)  {
  const handleUpClick = () => {
    //  console.log("Upper Case was Clicked " + text);
     let newText = text.toLocaleUpperCase();
     setText(newText);
  }

  const handleLoClick = () => {
    //  console.log("Lower Case was Clicked " + text);
     let newText = text.toLowerCase();
     setText(newText);
  }

  const handleOnChange = (event) => {
    // console.log("handle on change");
    setText(event.target.value);
 }

 const handleCopy = () => {
  // console.log("i am copy");
   const text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
 }

//  const handleClearClick = () => {
//   const text = document.getElementById("myBox");
//    let newText = text.splice(1, "");
//    setText(newText);
// }


 
 const handleExtraSpaces = () => {
  // console.log("Extra Spaces removing");
   let newText = text.split(/[ ]+/);
   setText(newText.join(" "));
}

  const [text, setText] = useState("");
  
  return (
    <>
<div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}
     id="myBox" rows="8"></textarea>
    </div>
    <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Upper Case</button>
    <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lower Case</button>
    {/* <button className='btn btn-primary mx-1' onClick={handleClearClick}>clear text</button> */}
    <button className='btn btn-primary mx-1' onClick={handleCopy}>clipboard copy Text</button>
    <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
 </div>
 <div className='container my-2'  style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>your text Summary</h2>
    <p><b>{text.split (" ").length}</b> words and <b>{text.length}</b></p>
    
    <p><b>{0.008 * text.split(" ").length}</b> Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter Something to preview it here"}</p>

 </div>
 </>
  );
}

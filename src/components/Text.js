import React, {useState} from 'react';

export default function Text(props) {
   

   const handleUpClick= ()=>{
      // console.log("upper case was clicked" + text);
       let newText = text.toUpperCase();
       setText(newText);
       props.showAlert("Converted to Uppercase", "success");
   }
       const handleLoClick= ()=>{
        // console.log("upper case was clicked" + text);
         let newText = text.toLowerCase();
         setText(newText);
         props.showAlert("Converted to Lowerrcase", "success");
   }
   const handleClearClick= ()=>{
    // console.log("upper case was clicked" + text);
     let newText = "";
     setText(newText);
     props.showAlert("Text removed", "success");
}
   const handleOnChange= (event)=>{
   // console.log("On change");
    setText(event.target.value);
   
}

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text copied", "success");

  }

  const handleExtraSpaces = () => {
    let newText =text.split(/[ ]+/);
    setText(newText.join (" "))
    props.showAlert("Extra space removed", "success");
  }
const [text, setText] = useState("");
// setText("enter new text");     //way to change state 
 return ( 
     <>
  <div className="container" style={{backgroundColor: props.mode==='dark'? '#184589':'white', color: props.mode==='dark'?'white':'black' }}  >
    

<div className="mb-3" >
<h2>{props.heading}</h2>

  <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'black':'white', color: props.mode==='dark'? 'white':'black' }} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra space</button>
  </div>
  <div className="container my-3"  style={{backgroundColor: props.mode==='dark'? '#184589':'white', color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length } Words and {text.length} Characters..</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } Minuts to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter your text in the text box above to preview here."}</p>
  </div>
  </>
 )
}

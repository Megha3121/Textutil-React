import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("coverted to uppercase!","success");
    }
    const handleLoClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("coverted to lowercase!","success");
  }
  const handleclearClick = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Text cleared!","success");
}
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value)
    }
    const handleCopy = () =>{
      var text = document.getElementById("mybox");
      text.select();
      navigator.clipboard.writeText(text.val);
      props.showAlert("Text copied!","success");
    }
    const [text, setText] = useState('');
  return (
    <>
   <div className='container'style={{color: props.mode=== 'dark'?'white': '#042743'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'?'grey': 'white', color: props.mode=== 'dark'?'white': 'black'}} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleclearClick}>clear Text</button>
<button className="btn btn-primary mx-1" onClick={handleCopy}>copy Text</button>


    </div>
    <div className='container my-3' style={{color: props.mode=== 'dark'?'white': '#042743'}}>
      <h2>Your Text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.lenght>0?text:"Enter Something in the textbox above to preview it here"}</p>
    </div>

    </>
  )

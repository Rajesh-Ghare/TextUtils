import React, { useState } from "react";
export default function TextForm(props) {

    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!","success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLocaleLowerCase();
        setText(newText);  
        props.showAlert("Converted to LowerCase!","success");      
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleCopy =()=>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges(); // remove selection of copied 
        props.showAlert("Copied!","success");
    }
    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Space removed!","success");
    }
    return (
        <>
            <div style={{color: props.mode ==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3" >
                    <textarea className="form-control" id="myBox" value={text} style={{backgroundColor: props.mode ==='dark'?'#b9b1b1':'white',color: props.mode ==='dark'?'white':'black'}} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            </div>
            <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(' ').filter((element)=>element.length!==0).length} words and {text.length} charactes</p>
                <p>{0.008 * text.split(' ').filter((element)=>element.length!==0).length} minutes to read</p>
            </div>
        </>

    )
}
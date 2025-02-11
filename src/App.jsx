import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./App.css";

import EditorToolbar, { modules, formats } from "./EditorToolbar";



export default function App() {
  const [value, setValue] = useState(""); 
  const [show, setShow] = useState(false);
  
  function buttonclick(event){
    event.preventDefault();
    console.log(value);
    setShow(true);
  }

  return (
    <div className="container">

      <div className="editor-preview">
        <div className="editor">
          <h2>Editor</h2>
          <label>enter your email : </label>
          <input type="email" className="emailsend"/>
          <div className="text-editor">
          <EditorToolbar />
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            placeholder={"Type Something Here..."}
            modules={modules}
            formats={formats}
          />
    </div>
          <button className="sendtext" onClick={buttonclick}>Get as html</button>
        </div>
       {show &&
        <div className="preview">
        <h2>Preview</h2>
        <div className="preview-content">{value}</div>
      </div>
       } 
        
      
      </div>

    </div>
  );
}

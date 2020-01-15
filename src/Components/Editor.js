import React from "react";

function Editor(props) {
  return (
    <div className='output'>
      <div className='output__title'>
        <p className='title'>Editor</p>
      </div>
      
      <textarea placeholder="The best readme of your life" type="text" onChange={props.method} id="editor" />
    </div>
  );
}

export default Editor;
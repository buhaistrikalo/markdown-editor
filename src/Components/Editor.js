import React from "react";

function Editor(props) {
  return (
    <div id="wrapper">
      <div id="editordiv">
        <div id="titleEditor">
          <i className="fa fa-cloud" />
          <p id="title">Editor</p>
        </div>
        <textarea type="text" onChange={props.method} id="editor" />
      </div>
    </div>
  );
}

export default Editor;
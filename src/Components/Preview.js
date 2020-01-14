import React from "react";
import marked from "marked";

function Previewer(props) {
  return (
    <div id="wrapper">
      <div id="youp">
        <div id="titlePreview">
          <i className="fa fa-cloud" />
          <p id="title">Preview</p>
        </div>
        <div
          id="preview"
          dangerouslySetInnerHTML={createMarkup(props.output)}
        />
      </div>
    </div>
  );
}

function createMarkup(props) {
  return { __html: marked(props) };
}

export default Previewer;

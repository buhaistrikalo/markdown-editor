import React from "react";
import marked from "marked";

function Previewer(props) {
  return (
    <div className='input'>
      <p className='input__title title'>Markdown</p>
      <div
        id="markdown"
        dangerouslySetInnerHTML={createMarkup(props.output)}
      />
    </div>
  );
}

function createMarkup(props) {
  return { __html: marked(props) };
}

export default Previewer;
